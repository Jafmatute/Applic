import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import loginLogo from "../../../assets/img/login.png";
import FormLogin from "../../components/Account/FormLogin";
import DropdownAlert from "react-native-dropdownalert";
import LoginFacebook from "../../components/Account/LoginFacebook";

export default function Login({ navigation }) {
  //console.log(navigation);
  const dropDownAlert = useRef();
  return (
    <ScrollView>
      <Image source={loginLogo} style={stylesLogin.logo} resizeMode="contain" />
      <View style={stylesLogin.viewContainer}>
        <FormLogin dropDownAlert={dropDownAlert} navigation={navigation} />

        <CreateAccount props={navigation} />
      </View>

      <Divider style={stylesLogin.dividir} />

      <View style={stylesLogin.viewContainer}>
        <LoginFacebook dropDownAlert={dropDownAlert} navigation={navigation} />
      </View>

      <DropdownAlert
        ref={dropDownAlert}
        style={{ width: "100%", height: "100%" }}
      />
    </ScrollView>
  );
}

function CreateAccount(propsRegister) {
  const { props } = propsRegister;

  return (
    <Text style={stylesLogin.textRegister}>
      ¿Aún no tienes una cuenta?{" "}
      <Text
        style={stylesLogin.btnRegister}
        onPress={() => props.navigate("Register")}
      >
        Regístrate
      </Text>
    </Text>
  );
}

const stylesLogin = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 50,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  btnRegister: {
    color: "#2089dc",
    fontWeight: "bold",
  },
  dividir: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
