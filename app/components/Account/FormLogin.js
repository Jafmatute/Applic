import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function FormLogin() {
  const [hidePassword, setHidePassword] = useState(true);

  const login = () => {
    console.log("inciar sesión");
  };
  return (
    <View style={stylesFormLogin.formContainer}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={stylesFormLogin.inputsForm}
        onChange={() => console.log("correo")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={stylesFormLogin.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={stylesFormLogin.inputsForm}
        password={true}
        secureTextEntry={hidePassword}
        onChange={() => console.log("password")}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={stylesFormLogin.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={stylesFormLogin.btnContainerLogin}
        buttonStyle={stylesFormLogin.btnLogin}
        onPress={login}
      />
    </View>
  );
}

const stylesFormLogin = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputsForm: {
    width: "100%",
    marginTop: 20,
  },
  iconRight: {
    color: "#c1c1c1",
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#2089dc",
  },
});
