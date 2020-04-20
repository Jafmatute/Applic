import React from "react";
import { SocialIcon } from "react-native-elements";

export default function LoginFacebook() {
  const loginFacebook = () => {
    console.log("iniciando sesión con Facebook");
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
