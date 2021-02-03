import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Add, DetailData, EditData} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home} // memanggil component Home yang berada di folder pages
        options={{headerShown: false}} // menyembunyikan header
      />
      <Stack.Screen name="Add" component={Add} options={{title: 'Add Data'}} />
      <Stack.Screen
        name="DetailData"
        component={DetailData}
        options={{title: 'Detail Data'}}
      />
      <Stack.Screen
        name="EditData"
        component={EditData}
        options={{title: 'Edit Data'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
