import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ItemBuyScreen from "../../screens/ItemBuy/ItemBuy";
import AddBuysScreen from "../../screens/ItemBuy/AddBuys";

const Stack = createStackNavigator();

const ItemBuyScreenStacks = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ItemBuy"
      component={ItemBuyScreen}
      options={{ title: "Articulos" }}
    />
    <Stack.Screen
      name="Buys"
      component={AddBuysScreen}
      options={{ title: "agregar compra" }}
    />
  </Stack.Navigator>
);

export default ItemBuyScreenStacks;
/*export default () => (
    <Stack.Navigator>
      <ItemBuyScreenStacks/>
    </Stack.Navigator>
  );*/
