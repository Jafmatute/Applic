import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import * as firebase from "firebase";

export default function ItemBuy({ navigation }) {
  //console.log(navigation);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        console.log(userInfo.emailVerified);
        if (userInfo.emailVerified === true) {
          setUser(userInfo);
        } else {
          setUser(null);
        }
      }
    });
  }, []);
  //console.log("Item buys....", user);
  return (
    <View style={stylesBuys.viewBody}>
      <Text>Productos del cliente</Text>

      {user ? (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="orange"
          containerStyle={stylesBuys.btnContainer}
          onPress={() => navigation.navigate("Buys")}
        />
      ) : null}
    </View>
  );
}

const stylesBuys = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});
//export default ItemBuy();
