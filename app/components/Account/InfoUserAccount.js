import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function InfoUserAccount(props) {
  const { userInfo } = props;
  return (
    <View>
      <Text>Usuario Logeado componente</Text>
    </View>
  );
}

const stylesInfoUser = StyleSheet.create({
  viewUserInfo: {},
});
