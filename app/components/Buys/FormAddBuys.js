import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default function FormAddBuys(props) {
  //console.log("add form", props);
  const { dropDownAlert, setIsLoading, navigation } = props;
  const [imageSelected, setImageSelected] = useState([]);
  //console.log("navigation form..", navigation);
  return (
    <ScrollView>
      <UploadImagen
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
        dropDownAlert={dropDownAlert}
      />
    </ScrollView>
  );
}

function UploadImagen(props) {
  const { imageSelected, setImageSelected, dropDownAlert } = props;

  const imageSelect = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    //console.log(resultPermissions);

    const resultPermissionCamera =
      resultPermissions.permissions.cameraRoll.status;

    if (resultPermissionCamera === "denied") {
      dropDownAlert.current.alertWithType(
        "error",
        "Galeria",
        "Permisos denegados, para activarlos en el apartado de ajsutes los puedes activar nuevamente"
      );
    } else {
      //console.log("correcto");
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (result.cancelled) {
        dropDownAlert.current.alertWithType(
          "info",
          "Galeria",
          "No seleccionó ninguna imagen de la galeria"
        );
      } else {
        setImageSelected([...imageSelected, result.uri]);
      }
    }
  };

  //console.log(imageSelected);

  return (
    <View style={stylesAddBuys.viewImage}>
      {imageSelected.length < 5 && (
        <Icon
          type="material-community"
          name="camera"
          color="#7a7a7a"
          containerStyle={stylesAddBuys.containerIcon}
          onPress={imageSelect}
        />
      )}

      {imageSelected.map((imageBuys, index) => (
        <Avatar
          key={index}
          onPress={() => console.log("eliminar imagen")}
          style={stylesAddBuys.miniatureStyle}
          source={{ uri: imageBuys }}
        />
      ))}
    </View>
  );
}

const stylesAddBuys = StyleSheet.create({
  viewImage: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});
