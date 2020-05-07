import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function InfoUserAccount(props) {
  const {
    infoUser: { uid, displayName, email, photoURL },
  } = props;
  //const { uid, displayName, email, photoURL } = props;
  //console.log("component user info", infoUser);

  const changeAvatar = () => {
    console.log("cambia tu avatar");
  };
  return (
    <View style={stylesInfoUser.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={stylesInfoUser.userInfoAvatar}
        source={{
          uri: photoURL
            ? photoURL
            : "https://api.adorable.io/avatars/263/abott@adorable.pngCopy to Clipb",
        }}
      />

      <View>
        <Text style={stylesInfoUser.displayName}>
          {displayName ? displayName : "Anónimo"}
        </Text>
        <Text> {email} </Text>
      </View>
    </View>
  );
}

const stylesInfoUser = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
  },
});
