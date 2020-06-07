import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Icon, Image } from "react-native-elements";
import FormAddOrder from "../../components/Buys/FormAddOrder";
const WidthScreen = Dimensions.get("window").width;

export default function Order(props) {
  const [img, setImg] = useState("");
  const {
    navigation,
    route: {
      name,
      params: { data },
    },
  } = props;
  return (
    <ScrollView>
      <ImageOrder theme={data[2]} img={img} />
      <UploadImg name={data[0]} img={img} setImg={setImg} theme={data[2]} />
      <FormAddOrder color={data[2]} name={data[0]} />
    </ScrollView>
  );
}

function ImageOrder(props) {
  const { name, theme, img } = props;

  return (
    <View style={[stylesOrder.viewFoto, { backgroundColor: theme }]}>
      {img ? (
        <Image
          source={{ uri: img }}
          style={{ width: WidthScreen, height: 250 }}
        />
      ) : (
        <Icon
          type="material-community"
          name="image-filter-center-focus-weak"
          size={50}
          containerStyle={stylesOrder.iconFoto}
          onPress={() => console.log("subir imagen")}
        />
      )}
    </View>
  );
}
function UploadImg(props) {
  const { theme, img, setImg } = props;
  const imgSelect = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    const resultPermissionsCamera =
      resultPermissions.permissions.cameraRoll.status;

    if (resultPermissionsCamera === "denied") {
      console.lo(
        "Permisos denegados, para activarlos en el apartado de ajustes los puedes activar nuevamente"
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (result.cancelled) {
        console.log("cancelada la selecciòn");
      } else {
        setImg(result.uri);
      }
    }
  };

  return (
    <View style={[stylesOrder.viewImage]}>
      <Icon
        type="material-community"
        name="camera"
        color={theme}
        raised={true}
        //containerStyle={stylesAddBuys.containerIcon}
        onPress={imgSelect}
      />
    </View>
  );
}

const stylesOrder = StyleSheet.create({
  viewFoto: {
    alignItems: "center",
    height: 200,
  },
  iconFoto: {
    marginVertical: 70,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewImage: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: -40,
  },
});
