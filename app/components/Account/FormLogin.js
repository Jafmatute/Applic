import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validations";
import Loading from "../Loading";
import * as firebase from "firebase";

export default function FormLogin(props) {
  //console.log(props);
  const { dropDownAlert, navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    if (!email || !password) {
      dropDownAlert.current.alertWithType(
        "error",
        "Inicio de sesión",
        "Los campos son obligatorios"
      );
    } else {
      if (!validateEmail(email)) {
        dropDownAlert.current.alertWithType(
          "error",
          "Inicio de sesión",
          "Correo electrónico no válido"
        );
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((e) => {
            if (e.user.emailVerified) {
              navigation.navigate("MyAccount");
            } else {
              dropDownAlert.current.alertWithType(
                "info",
                "Inicio de sesión",
                "Su cuenta no ha sido autenticada!"
              );
            }

            console.log(e);
          })
          .catch((e) => {
            dropDownAlert.current.alertWithType(
              "error",
              "Inicio de sesión",
              "Correo electrónico / contraseña incorrectas"
            );
          });
      }
    }

    setIsLoading(false);
  };
  return (
    <View style={stylesFormLogin.formContainer}>
      <Input
        placeholder="Correo Electrónico"
        containerStyle={stylesFormLogin.inputsForm}
        onChange={(e) => setEmail(e.nativeEvent.text)}
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
        onChange={(e) => setPassword(e.nativeEvent.text)}
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

      <Loading text="Iniciando Sesión" isVisible={isLoading} />
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
