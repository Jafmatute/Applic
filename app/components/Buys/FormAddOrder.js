import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { Image, Icon, Input, Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Customs/Colors";
export default function FormAddOrder(props) {
  console.log("form add order", props);
  const { color, name } = props;

  return (
    <View style={stylesformOrder.footer}>
      {/*<Text
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginLeft: 130,
          marginRight: 130,
          fontSize: 16,
        }}
      >
        {name}
    </Text>*/}

      <View style={{ flexDirection: "row" }}>
        <View style={stylesformOrder.dividir} />
        <Text style={stylesformOrder.title}>{name}</Text>
        <View style={stylesformOrder.dividir} />
      </View>
      <ScrollView>
        <Text style={[stylesformOrder.tex_footer, { marginVertical: 20 }]}>
          Descripciòn
        </Text>
        <View style={stylesformOrder.action}>
          <Input
            style={stylesformOrder.textInput}
            autoCapitalize="none"
            //onChange={(e) => onchangeInput(e, "marca")}
            leftIcon={{
              type: "material-community",
              name: "car",
              size: 20,
            }}
          />
        </View>
        <Text style={stylesformOrder.tex_footer}>cantidad</Text>
        <View style={stylesformOrder.action}>
          <Input
            //onChange={(e) => onchangeInput(e, "modelo")}
            style={stylesformOrder.textInput}
            autoCapitalize="none"
            leftIcon={{
              type: "material-community",
              name: "information-variant",
              size: 25,
            }}
          />
        </View>

        <Text style={stylesformOrder.tex_footer}>Ubicación</Text>
        <View style={stylesformOrder.action}>
          <Input
            //onChange={(e) => onchangeInput(e, "serie")}
            style={stylesformOrder.textInput}
            autoCapitalize="none"
            leftIcon={{
              type: "material-community",
              name: "information-variant",
              size: 20,
            }}
            rightIcon={
              <Icon
                type="material-community"
                name="map-outline"
                color="green"
                size={20}
                onPress={() => console.log("ubicación")}
              />
            }
          />
        </View>

        <View style={stylesformOrder.button}>
          <LinearGradient
            colors={[color, color]}
            style={stylesformOrder.signIn}
          >
            <Text
              onPress={() => console.log("guardar")}
              style={[stylesformOrder.textSign, { color: "#fff" }]}
            >
              Guardar Pedido
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const stylesformOrder = StyleSheet.create({
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  tex_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    /*borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",*/
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dividir: {
    backgroundColor: Colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.black,
    paddingHorizontal: 64,
  },
});
