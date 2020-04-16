import React from 'react';
import { Icon } from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ItemBuyScreenStacks from './stack/ItemBuyStackNavigation';
import MyAccountScreenStacks from './stack//MyAccountNavigationStack';
import MessageScreenStacks from './stack/MessageStackNavigation';
import SearchScreenStacks from './stack/SearchStackNavigation';

const Tab = createBottomTabNavigator();

const  NavigationStacks = () => (

      <Tab.Navigator initialRouteName="Account"
      screenOptions={{ gestureEnabled: false }} >
        
        <Tab.Screen name="Buys" component={ItemBuyScreenStacks}
        options ={{
          tabBarIcon: ({tintColor}) => (
            <Icon
            type="material-community"
            name="compass-outline"
            size = {24}
            color={tintColor} 
            />
          )
        }}  />

        <Tab.Screen name="Search" component={SearchScreenStacks}
        options= {{
          tabBarIcon: ({tintColor}) => (
            <Icon
            type="material-community"
            name="magnify"
            size={24}
            color={tintColor}
            />
          )
        }} />
     
 
        <Tab.Screen name="Account" component={MyAccountScreenStacks}
        options = {{
          tabBarIcon: ({tintColor}) => (
            <Icon
            type="material-community"
            name="account-details"
            size={24}
            color={tintColor}
            />
          )
        }}     
        />


        <Tab.Screen name="Message" component={MessageScreenStacks} 
        options = {{
          tabBarIcon: ({tintColor}) => (
            <Icon
            type="material-community"
            name="forum"
            size={24}
            color={tintColor}
             />
          )
        }}
        />
   
   </Tab.Navigator>
)


export default () => (
  <NavigationContainer>
    <NavigationStacks />
  </NavigationContainer>
);