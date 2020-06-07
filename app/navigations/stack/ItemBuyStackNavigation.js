import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ItemBuyScreen from "../../screens/ItemBuy/ItemBuy";
import AddBuysScreen from "../../screens/ItemBuy/AddBuys";
import OrderScreen from "../../screens/ItemBuy/Order";

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
      options={{ title: "Compra" }}
    />

    <Stack.Screen
      name="Order"
      component={OrderScreen}
      options={{ title: "Pedido" }}
    />
  </Stack.Navigator>
);

export default ItemBuyScreenStacks;
/*export default () => (
    <Stack.Navigator>
      <ItemBuyScreenStacks/>
    </Stack.Navigator>
  );*/
