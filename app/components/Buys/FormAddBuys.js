import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";

export default function FormAddBuys(props) {
  //console.log("add form", props);
  const { dropDownAlert, setIsLoading, navigation } = props;
  const [imageSelected, setImageSelected] = useState([]);
  //console.log("navigation form..", navigation);
  return (
    <ScrollView>
      <UploadImagen
        imageSelected={imageSelected}
        setImageSelected={setImageSelected}
      />
    </ScrollView>
  );
}

function UploadImagen(props) {
  const { imageSelected, setImageSelected } = props;

  return (
    <View style={stylesAddBuys.viewImage}>
      <Icon
        type="material-community"
        name="camera"
        color="#7a7a7a"
        containerStyle={stylesAddBuys.containerIcon}
        onPress={() => console.log("subiendo imagen")}
      />

      <Avatar
        onPress={() => console.log("eliminar imagen")}
        style={stylesAddBuys.miniatureStyle}
        //source={{uri?}}
      />
    </View>
  );
}

const stylesAddBuys = StyleSheet.create({
  viewImage: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});
