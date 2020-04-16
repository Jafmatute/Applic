import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccountScreen from '../../screens/Account/MyAccount';
import LoginScreen from '../../screens/Account/Login';
import RegisterScreen from '../../screens/Account/Register';

const Stack = createStackNavigator();

const MyAccountScreenStacks = () => (

<Stack.Navigator>

    <Stack.Screen name = "MyAccount" component = {MyAccountScreen}
    options = {{title:"Mì cuenta"}}
     />

    <Stack.Screen name = "Login" component = {LoginScreen}
    options= {{title:'Login'}}
    />

    <Stack.Screen name = "Register" component = {RegisterScreen}
    options = {{title:'Register user'}}
    />

</Stack.Navigator>


)

export default MyAccountScreenStacks;