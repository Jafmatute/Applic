import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { Image, Icon, Input, Button } from "react-native-elements";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Customs/Colors";
import Modal from "../Modal";
export default function FormAddOrder(props) {
  //console.log("form add order", props);
  const { color, name, img } = props;
  const [isVisibleMap, setIsVisibleMap] = useState(false);
  const [locationOrder, setLocationOrder] = useState(null);

  return (
    <View>
      <AddOrder
        color={color}
        name={name}
        img={img}
        setIsVisibleMap={setIsVisibleMap}
        locationOrder={locationOrder}
      />
      <Map
        isVisibleMap={isVisibleMap}
        setIsVisibleMap={setIsVisibleMap}
        setLocationOrder={setLocationOrder}
      />
    </View>
  );
}

function AddOrder(props) {
  const { color, name, img, setIsVisibleMap, locationOrder } = props;
  const [formData, setFormdata] = useState({
    descripcion: "",
    cantidad: "",
    direccion: "",
  });
  return (
    <View style={stylesformOrder.footer}>
      <View style={{ flexDirection: "row" }}>
        <View style={stylesformOrder.dividir} />
        <Text style={stylesformOrder.title}>{name}</Text>
        <View style={stylesformOrder.dividir} />
      </View>
      <ScrollView>
        <Text style={[stylesformOrder.tex_footer, { marginVertical: 20 }]}>
          Descripciòn
        </Text>
        <View style={stylesformOrder.action}>
          <Input
            style={stylesformOrder.textInput}
            autoCapitalize="none"
            //onChange={(e) => onchangeInput(e, "marca")}
            leftIcon={{
              type: "material-community",
              name: "car",
              size: 20,
            }}
          />
        </View>
        <Text style={stylesformOrder.tex_footer}>cantidad</Text>
        <View style={stylesformOrder.action}>
          <Input
            //onChange={(e) => onchangeInput(e, "modelo")}
            style={stylesformOrder.textInput}
            autoCapitalize="none"
            leftIcon={{
              type: "material-community",
              name: "information-variant",
              size: 25,
            }}
          />
        </View>

        <Text style={stylesformOrder.tex_footer}>Ubicación</Text>
        <View style={stylesformOrder.action}>
          <Input
            //onChange={(e) => onchangeInput(e, "serie")}
            style={stylesformOrder.textInput}
            autoCapitalize="none"
            leftIcon={{
              type: "material-community",
              name: "information-variant",
              size: 20,
            }}
            rightIcon={
              <Icon
                type="material-community"
                name="map-outline"
                color="green"
                size={20}
                onPress={() => setIsVisibleMap(true)}
              />
            }
          />
        </View>

        <View style={stylesformOrder.button}>
          <LinearGradient
            colors={[color, color]}
            style={stylesformOrder.signIn}
          >
            <Text
              onPress={() => console.log("guardar")}
              style={[stylesformOrder.textSign, { color: "#fff" }]}
            >
              Guardar Pedido
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

function Map(props) {
  const { isVisibleMap, setIsVisibleMap, setLocationOrder } = props;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const resultPermissions = await Permissions.askAsync(
        Permissions.LOCATION
      );

      const statusPermissions = resultPermissions.permissions.location.status;
      if (statusPermissions != "granted") {
        console.log("Debe activar los permisos manualmente en ajustes");
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
  //console.log("location", location);
  const saveLocation = () => {
    setLocationOrder(location);
    console.log("Localización guardada");
    setIsVisibleMap(false);
  };
  return (
    <Modal isVisible={isVisibleMap} setIsVisible={setIsVisibleMap}>
      <View>
        {location && (
          <MapView
            style={stylesformOrder.map}
            initialRegion={location}
            showsUserLocation={true}
            onRegionChange={(r) => setLocation(r)}
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
        <View style={stylesformOrder.viewMapBtn}>
          <Button
            title="Guardar"
            onPress={saveLocation}
            containerStyle={stylesformOrder.viewMapBtnContainerSave}
            buttonStyle={stylesformOrder.viewMapBtnSave}
          />
          <Button
            title="Cancelar"
            onPress={() => setIsVisibleMap(false)}
            containerStyle={stylesformOrder.viewMapBtnContainerCancel}
            buttonStyle={stylesformOrder.viewMapBtnCancel}
          />
        </View>
      </View>
    </Modal>
  );
}

const stylesformOrder = StyleSheet.create({
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  tex_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    /*borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",*/
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dividir: {
    backgroundColor: Colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.black,
    paddingHorizontal: 64,
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
    borderRadius: 50,
  },
  viewMapBtnContainerCancel: {
    paddingLeft: 5,
  },
  viewMapBtnCancel: {
    backgroundColor: "#a60d0d",
    borderRadius: 50,
  },
});
