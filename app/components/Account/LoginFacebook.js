import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";
export default function LoginFacebook() {
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
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          console.log("login correcto");
        })
        .catch((e) => {
          let errorMsj = e.message;
          console.log(errorMsj);
          console.log("error accediendo con Facebook, intentelo más tarde");
        });
    } else if (type === "cancel") {
      console.log("Inicio de sesión con Facebook cancelado");
    } else {
      console.log("error desconocido, intentelo más tarde");
    }
  };

  return (
    <SocialIcon
      title="Iniciar sesión con Facebook"
      button
      type="facebook"
      onPress={loginFacebook}
    />
  );
}
