import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import {
  Icon,
  Avatar,
  Badge,
  Image,
  Input,
  Button,
} from "react-native-elements";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import imgbuy from "../../../assets/img/screen-buys.png";
import MapView from "react-native-maps";
import Modal from "../../components/Modal";

const WidthScreen = Dimensions.get("window").width;

export default function FormAddBuys(props) {
  //console.log("add form", props);
  const { dropDownAlert, setIsLoading, navigation } = props;
  const [imageSelected, setImageSelected] = useState([]);
  //console.log("navigation form..", navigation);

  //state Maps
  const [isVisibleMap, setIsVisibleMap] = useState(false);
  const [locationBuys, setLocationBuy] = useState(null);

  //Formulario state
  const [data, setDataForm] = useState({
    title: "",
    location: "",
    description: "",
  });

  const hadleChange = (e, text) => {
    setDataForm({
      ...data,
      [text]: e.nativeEvent.text,
    });
  };

  return (
    <ScrollView>
      <ImageBuys imageBuys={imageSelected[0]} />
      <AddForm
        hadleChange={hadleChange}
        setIsVisibleMap={setIsVisibleMap}
        locationBuys={locationBuys}
      />
      <UploadImagen
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
        dropDownAlert={dropDownAlert}
      />
      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        setLocationBuy={setLocationBuy}
        dropDownAlert={dropDownAlert}
      />
    </ScrollView>
  );
}

function ImageBuys(props) {
  const { imageBuys } = props;

  return (
    <View style={stylesAddBuys.viewPhoto}>
      {imageBuys ? (
        <Image
          source={{ uri: imageBuys }}
          style={{ width: WidthScreen, height: 200 }}
        />
      ) : (
        <Image source={imgbuy} style={{ width: WidthScreen, height: 200 }} />
      )}
    </View>
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
          "Cancelada la selección"
        );
      } else {
        setImageSelected([...imageSelected, result.uri]);
      }
    }
  };

  const removeImage = (image) => {
    //console.log(image);
    const arrayImage = imageSelected;
    Alert.alert(
      "Eliminar imagen",
      "¿Está seguro de que quiere eliminar la imagen?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () =>
            setImageSelected(
              arrayImage.filter((imageURL) => imageURL != image)
            ),
        },
      ],
      { cancelable: false }
    );
  };

  //console.log(imageSelected);

  return (
    <View style={stylesAddBuys.viewImage}>
      {imageSelected.length < 5 && (
        <Icon
          type="material-community"
          name="camera"
          color="#2089dc"
          raised={true}
          //containerStyle={stylesAddBuys.containerIcon}
          onPress={imageSelect}
        />
      )}

      {imageSelected.map((imageBuys, index) => (
        <View key={index}>
          <Avatar
            onPress={() => removeImage(imageBuys)}
            style={stylesAddBuys.miniatureStyle}
            source={{ uri: imageBuys }}
          />
          <Badge
            //key={index}
            status="error"
            containerStyle={stylesAddBuys.badgeAvatar}
            onPress={() => removeImage(imageBuys)}
            value="X"
          />
        </View>
      ))}
    </View>
  );
}

function AddForm(props) {
  //console.log(props);
  const { hadleChange, setIsVisibleMap, locationBuys } = props;
  //console.log(title);
  return (
    <View style={stylesAddBuys.viewForm}>
      <Input
        placeholder="Nombre del articulo"
        containerStyle={stylesAddBuys.inputAddForm}
        onChange={(text) => hadleChange(text, "title")}
      />

      <Input
        placeholder="Dirección"
        containerStyle={stylesAddBuys.inputAddForm}
        rightIcon={{
          type: "material-community",
          name: "google-maps",
          color: locationBuys ? "#00a680" : "#c2c2c2",
          onPress: () => setIsVisibleMap(true),
        }}
        onChange={(text) => hadleChange(text, "location")}
      />

      <Input
        placeholder="Descripción"
        multiline={true}
        containerStyle={stylesAddBuys.inputTextArea}
        onChange={(text) => hadleChange(text, "description")}
      />
    </View>
  );
}

function Map(props) {
  const {
    isVisibleMap,
    setIsVisibleMap,
    setLocationBuy,
    dropDownAlert,
  } = props;

  const [location, setLocation] = useState(null);
  //console.log(location);

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );
      //console.log(resultPermissions );
      const statusPermissions = resultPermissions.permissions.location.status;

      if (statusPermissions !== "granted") {
        dropDownAlert.current.alertWithType(
          "info",
          "Ubicación",
          "Debé activarlos manualmente en ajustes(Configuración del dispostivo FINDIT.)"
        );
      } else {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      }
    })();
  }, []);

  const confirmLocation = () => {
    setLocationBuy(location);
    dropDownAlert.current.alertWithType(
      "success",
      "Ubicación",
      "Localización guardada)"
    );

    setIsVisibleMap(false);
    //console.log("localización save", location);
  };

  return (
    <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
      <View>
        {location && (
          <MapView
            style={stylesAddBuys.map}
            initialRegion={location}
            showsUserLocation={true}
            onRegionChange={(region) => setLocation(region)}
          >
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              draggable
            />
          </MapView>
        )}
        <View style={stylesAddBuys.viewMapBtn}>
          <Button
            title="Guardar"
            onPress={confirmLocation}
            containerStyle={stylesAddBuys.viewMapBtnContainerSave}
            buttonStyle={stylesAddBuys.viewMapBtnSave}
          />
          <Button
            title="Cancelar"
            onPress={() => setIsVisibleMap(false)}
            containerStyle={stylesAddBuys.viewMapBtnContainerCancel}
            buttonStyle={stylesAddBuys.viewMapBtnCancel}
          />
        </View>
      </View>
    </Modal>
  );
}

const stylesAddBuys = StyleSheet.create({
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20,
  },
  viewImage: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: -40,
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
  badgeAvatar: {
    position: "absolute",
    top: -3,
    right: 32,
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  inputAddForm: {
    marginBottom: 10,
  },
  inputTextArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  map: {
    width: "100%",
    height: 550,
  },
  viewMapBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  viewMapBtnContainerSave: {
    paddingRight: 5,
  },
  viewMapBtnSave: {
    backgroundColor: "#08a686",
  },
  viewMapBtnContainerCancel: {
    paddingLeft: 5,
  },
  viewMapBtnCancel: {
    backgroundColor: "#a60d0d",
  },
});
