import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../../screens/Search';

const Stack = createStackNavigator();

const SearchScreenStacks = () => (

    <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen}
        options={{title:"Search"}}
        />
    </Stack.Navigator>

)

export default SearchScreenStacks;