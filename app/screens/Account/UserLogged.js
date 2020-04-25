import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import InfoUserAccount from "../../components/Account/InfoUserAccount";

export default function UserLogged() {
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      //console.log("desde usuario logeado", user);
      setInfoUser[user.providerData[0]];
    })();
  }, []);

  return (
    <View>
      <InfoUserAccount infoUser={infoUser} />

      <Button title="Cerrar sesión" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}
