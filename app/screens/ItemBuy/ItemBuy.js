import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import * as firebase from "firebase";

export default function ItemBuy({ navigation }) {
  //console.log(navigation);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      setUser(userInfo);
    });
  }, []);

  return (
    <View style={stylesBuys.viewBody}>
      <Text>Productos del cliente</Text>

      {user && <AddBuysButton navigation={navigation} />}
    </View>
  );
}

function AddBuysButton(props) {
  const { navigation } = props;
  return (
    <ActionButton
      buttonColor="orange"
      onPress={() => navigation.navigate("Buys")}
    />
  );
}

const stylesBuys = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  buttom: {},
});
//export default ItemBuy();
