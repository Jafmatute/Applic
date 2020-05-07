import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function FormAddBuys(props) {
  //console.log("add form", props);
  const { dropDownAlert, setIsLoading, navigation } = props;
  console.log("navigation form..", navigation);
  return (
    <View>
      <Text>add buys form</Text>
    </View>
  );
}
