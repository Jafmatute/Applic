import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import { Image, Icon, Input, Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Customs/Colors";
export default function AddProfileVehicle(props) {
  const { closeModal, addVehicleProfile } = props;

  const backGroundColors = [
    "#5CDB59",
    "#24A6D9",
    "#5958D9",
    "#8022D9",
    "#D15908",
    "#D85963",
    "#D88559",
  ];
  const [color, setColor] = useState(backGroundColors[0]);

  const [dataForm, setDataForm] = useState(defaultForm());
  //console.log(dataForm);

  function renderColor() {
    return backGroundColors.map((color) => {
      return (
        <Icon
          type="material-community"
          name="cart-plus"
          size={30}
          key={color}
          onPress={() => setColor(color)}
          iconStyle={[stylesProfileVehicle.colorSelected, { color: color }]}
        />
      );
    });
  }
  function defaultForm() {
    return {
      marca: "",
      modelo: "",
      tipo: "",
      vin: "",
      serie: "",
    };
  }
  const onchangeInput = (event, name) => {
    setDataForm({ ...dataForm, [name]: event.nativeEvent.text });
  };

  const onSubmit = () => {
    addVehicleProfile({ color: color, dataForm });
    closeModal();
  };

  return (
    <View style={[stylesProfileVehicle.container, { backgroundColor: color }]}>
      <View style={[stylesProfileVehicle.header]}>
        <Text style={stylesProfileVehicle.text_header}>Datos del Vehículo</Text>
      </View>
      <View style={stylesProfileVehicle.footer}>
        <TouchableOpacity
          style={{ position: "absolute", top: 10, right: 10 }}
          onPress={closeModal}
        >
          <AntDesign name="close" size={20} color={Colors.black} />
        </TouchableOpacity>
        <ScrollView>
          <Text style={stylesProfileVehicle.tex_footer}>Marca</Text>
          <View style={stylesProfileVehicle.action}>
            <Input
              style={stylesProfileVehicle.textInput}
              autoCapitalize="none"
              onChange={(e) => onchangeInput(e, "marca")}
              leftIcon={{
                type: "material-community",
                name: "car",
                size: 20,
              }}
              /*rightIcon={
                <Icon
                  type="material-community"
                  name="checkbox-marked-circle-outline"
                  color="green"
                  size={20}
                />
              }*/
            />
          </View>
          <Text style={stylesProfileVehicle.tex_footer}>Modelo</Text>
          <View style={stylesProfileVehicle.action}>
            <Input
              onChange={(e) => onchangeInput(e, "modelo")}
              style={stylesProfileVehicle.textInput}
              autoCapitalize="none"
              leftIcon={{
                type: "material-community",
                name: "information-variant",
                size: 25,
              }}
            />
          </View>
          <Text style={stylesProfileVehicle.tex_footer}>Tipo de vehículo</Text>
          <View style={stylesProfileVehicle.action}>
            <Input
              onChange={(e) => onchangeInput(e, "tipo")}
              style={stylesProfileVehicle.textInput}
              autoCapitalize="none"
              leftIcon={{
                type: "material-community",
                name: "car-multiple",
                size: 20,
              }}
            />
          </View>
          <Text style={stylesProfileVehicle.tex_footer}>VIN</Text>
          <View style={stylesProfileVehicle.action}>
            <Input
              onChange={(e) => onchangeInput(e, "vin")}
              style={stylesProfileVehicle.textInput}
              autoCapitalize="none"
              leftIcon={{
                type: "material-community",
                name: "gauge",
                size: 20,
              }}
            />
          </View>
          <Text style={stylesProfileVehicle.tex_footer}>Serie</Text>
          <View style={stylesProfileVehicle.action}>
            <Input
              onChange={(e) => onchangeInput(e, "serie")}
              style={stylesProfileVehicle.textInput}
              autoCapitalize="none"
              leftIcon={{
                type: "material-community",
                name: "information-variant",
                size: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            {renderColor()}
          </View>
          <View style={stylesProfileVehicle.button}>
            <LinearGradient
              colors={[color, color]}
              style={stylesProfileVehicle.signIn}
            >
              <Text
                onPress={onSubmit}
                style={[stylesProfileVehicle.textSign, { color: "#fff" }]}
              >
                Guardar Perfil
              </Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const stylesProfileVehicle = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "orange",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
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
});
