import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Add, DetailData} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home} // memanggil component Home yang berada di folder pages
        options={{headerShown: false}} // menyembunyikan header
      />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="DetailData" component={DetailData} />
    </Stack.Navigator>
  );
};

export default Router;
