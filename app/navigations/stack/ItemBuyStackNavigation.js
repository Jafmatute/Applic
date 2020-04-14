import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemBuyScreen from '../../screens/ItemBuy';

const Stack = createStackNavigator();

const ItemBuyScreenStacks = () => (
    
    <Stack.Navigator>
    <Stack.Screen name = "ItemBuy" component = {ItemBuyScreen}
    options = {{title:'Applic'}}
    />
    </Stack.Navigator>

)


export default ItemBuyScreenStacks;
/*export default () => (
    <Stack.Navigator>
      <ItemBuyScreenStacks/>
    </Stack.Navigator>
  );*/