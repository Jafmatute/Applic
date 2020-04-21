import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";
export default function LoginFacebook(props) {
  const { dropDownAlert, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);

  const loginFacebook = async () => {
    await Facebook.initializeAsync();

    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id,
      { permissions: FacebookApi.permissions }
    );

    if (type === "success") {
      setIsLoading(true);
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          navigation.navigate("MyAccount");
        })
        .catch((e) => {
          let errorMsj = e.message;
          //console.log(errorMsj);
          dropDownAlert.current.alertWithType(
            "error",
            "Inicio de sesión Facebook",
            "error accediendo con Facebook, intentelo más tarde"
          );
        });
    } else if (type === "cancel") {
      dropDownAlert.current.alertWithType(
        "error",
        "Cancelado",
        "Inicio de sesión con Facebook cancelado"
      );
    } else {
      dropDownAlert.current.alertWithType(
        "error",
        "Desconocido",
        "error desconocido, intentelo más tarde"
      );
    }

    setIsLoading(false);
  };

  return (
    <>
      <SocialIcon
        title="Iniciar sesión con Facebook"
        button
        type="facebook"
        onPress={loginFacebook}
      />

      <Loading isVisible={isLoading} text="Iniciando sesión" />
    </>
  );
}
