import React, { useState, useEffect, useCallback } from "react";
import * as firebase from "firebase";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Dimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  Icon,
  Avatar,
  Badge,
  Image,
  Input,
  Button,
} from "react-native-elements";
import Colors from "../../Customs/Colors";
import {
  firebaseBuys,
  getPerfilVehicle,
  addProfile,
} from "../../utils/FirebaseBuys";
import imgbuy from "../../../assets/img/screen-buys.png";
import AddProfileVehicle from "./AddProfileVehicle";
const WidthScreen = Dimensions.get("window").width;

export default function FormAddBuys(props) {
  const { dropDownAlert, setIsLoading, navigation } = props;
  const [imageSelected, setImageSelected] = useState([]);
  const [lists, setLists] = useState([]);
  const [user, setUser] = useState({});

  useFocusEffect(
    useCallback(() => {
      getPerfilVehicle((lists) => {
        setLists(lists);
      });
    })
  );
  return (
    <ScrollView>
      <ImageBuys imageBuys={imageSelected[0]} />
      <ListProfile lists={lists} navigation={navigation} />
    </ScrollView>
  );
}

function ImageBuys(props) {
  const { imageBuys } = props;

  return (
    <View style={stylesAddBuys.viewPhoto}>
      {imageBuys ? (
        <Image
          source={{ uri: imageBuys }}
          style={{ width: WidthScreen, height: 200 }}
        />
      ) : (
        <Image source={imgbuy} style={{ width: WidthScreen, height: 200 }} />
      )}
    </View>
  );
}

//agregar perfil del vehículo a firebase
const addVehicleProfile = (list) => {
  //console.log("New profile", list);
  const {
    color,
    dataForm: { marca, modelo, tipo, vin, serie },
  } = list;
  addProfile({
    marca: marca,
    modelo: modelo,
    serie: serie,
    tema: color,
    tipo: tipo,
    vin: vin,
  });
};
function ListProfile(props) {
  const { lists, navigation } = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const icon = "cart-plus";
  //console.log("lisProfile- probando..", lists);

  return (
    <View style={stylesAddBuys.container}>
      <Modal
        animationType="slide"
        visible={isVisibleModal}
        onRequestClose={() => setIsVisibleModal(false)}
      >
        <AddProfileVehicle
          closeModal={() => setIsVisibleModal(false)}
          addVehicleProfile={addVehicleProfile}
        />
      </Modal>
      <View style={{ backgroundColor: Colors.themeColor }}></View>

      <View style={stylesAddBuys.add}>
        <Text style={{ fontSize: 24 }}>Añadir</Text>
        <Icon
          type="material-community"
          name="plus-circle-outline"
          size={40}
          style={stylesAddBuys.iconVehicle}
          onPress={() => setIsVisibleModal(true)}
        />
      </View>

      <ScrollView style={{ backgroundColor: Colors.backgroundApp }}>
        {lists.map((task) => (
          <ProfileVehicle
            task={`${task.marca},${task.modelo}`}
            icon={icon}
            theme={task.tema}
            stamp={`${task.tipo} - ${task.serie} - ${task.vin}`}
            navigation={navigation}
            key={task.id}
          />
        ))}
        {lists.length === 0 && (
          <View
            style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20 }}>No hay data</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const ProfileVehicle = ({ task, icon, theme, stamp, navigation }) => {
  return (
    <View style={[stylesAddBuys.profileVehicle]} key={task}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Order", { data: [task, stamp, theme] })
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            type="material-community"
            name={icon}
            size={30}
            iconStyle={{ color: theme, marginRight: 5 }}
          />

          <View>
            <Text style={{ fontSize: 16 }}>{task}</Text>
            <Text style={{ color: Colors.greyish }}>{stamp}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <Icon
          type="material-community"
          name="pencil"
          size={25}
          style={{ color: theme }}
        />
        <Icon
          type="material-community"
          name="trash-can"
          size={25}
          style={{ color: theme, marginLeft: 5 }}
        />
      </View>
    </View>
  );
};

const stylesAddBuys = StyleSheet.create({
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
  },
  add: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundApp,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 20,
    paddingLeft: 20,
    paddingRight: 40,
  },
  profileVehicle: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconVehicle: {
    color: Colors.themeColor,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginHorizontal: 20,
  },
});
