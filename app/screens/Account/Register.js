import React, { useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import logo from "../../../assets/img/register.png";
import FormRegister from "../../components/Account/FormRegister";
import DropdownAlert from "react-native-dropdownalert";

export default function Register({ navigation }) {
  const dropDownAlert = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image source={logo} style={stylesRegister.logo} resizeMode="contain" />

      <Text style={stylesRegister.titulo}>
        Regístre sus datos <Text style={stylesRegister.findit}>Findit.</Text>
      </Text>

      <View style={stylesRegister.viewForm}>
        <FormRegister dropDownAlert={dropDownAlert} navigation={navigation} />
      </View>

      <DropdownAlert
        ref={dropDownAlert}
        style={{ width: "100%", height: "100%" }}
      />
    </KeyboardAwareScrollView>
  );
}

const stylesRegister = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  titulo: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 25,
  },
  findit: {
    color: "#2089dc",
    fontSize: 30,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});
