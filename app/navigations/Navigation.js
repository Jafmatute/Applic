import React from "react";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ItemBuyScreenStacks from "./stack/ItemBuyStackNavigation";
import MyAccountScreenStacks from "./stack//MyAccountNavigationStack";
import MessageScreenStacks from "./stack/MessageStackNavigation";
import SearchScreenStacks from "./stack/SearchStackNavigation";

const Tab = createBottomTabNavigator();

const NavigationStacks = () => (
  <Tab.Navigator
    initialRouteName="ItemBuys"
    tabBarOptions={{
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680",
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => screenOptions(route, color),
    })}
  >
    <Tab.Screen
      name="ItemBuys"
      component={ItemBuyScreenStacks}
      options={{
        title: "Articulos",
      }}
    />

    <Tab.Screen
      name="Search"
      component={SearchScreenStacks}
      options={{
        title: "Búsqueda",
      }}
    />

    <Tab.Screen
      name="Account"
      component={MyAccountScreenStacks}
      options={{
        title: "Cuenta",
      }}
    />

    <Tab.Screen
      name="Message"
      component={MessageScreenStacks}
      options={{
        title: "Mensaje",
      }}
    />
  </Tab.Navigator>
);

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "ItemBuys":
      iconName = "cart-outline";
      break;
    case "Search":
      iconName = "magnify";
      break;
    case "Account":
      iconName = "home-outline";
      break;
    case "Message":
      iconName = "message-outline";
      break;

    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}

export default () => (
  <NavigationContainer>
    <NavigationStacks />
  </NavigationContainer>
);
