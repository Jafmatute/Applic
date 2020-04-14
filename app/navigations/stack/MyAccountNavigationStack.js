import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccountScreen from '../../screens/MyAccount';

const Stack = createStackNavigator();

const MyAccountScreenStacks = () => (

<Stack.Navigator>

    <Stack.Screen name = "MyAccount" component = {MyAccountScreen}
    options = {{title:"Mì cuenta"}}
     />

</Stack.Navigator>



)

export default MyAccountScreenStacks;