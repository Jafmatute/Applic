import React, { useState, useRef } from "react";
import { View } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
import Loading from "../../components/Loading";
import FormAddBuys from "../../components/Buys/FormAddBuys";

export default function AddBuys({ navigation }) {
  //console.log("add-Buys", navigation);
  const dropDownAlert = useRef();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View>
      <FormAddBuys
        dropDownAlert={dropDownAlert}
        setIsLoading={setIsLoading}
        navigation={navigation}
      />
      <DropdownAlert
        ref={dropDownAlert}
        style={{ width: "100%", height: "100%" }}
      />
      <Loading isVisible={isLoading} text="Añadiendo Articulos" />
    </View>
  );
}
