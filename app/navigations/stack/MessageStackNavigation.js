import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessageScreen  from '../../screens/Message';

const Stack = createStackNavigator();

const MessageScreenStacks = () => (

    <Stack.Navigator>
        <Stack.Screen name="Message" component={MessageScreen}
        options= {{title:"Message"}}
         />
        
    </Stack.Navigator>

)

export default MessageScreenStacks;
