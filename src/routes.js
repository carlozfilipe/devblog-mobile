import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import CategoryPosts from './pages/CategoryPosts';
import Search from './pages/Search';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }} 
      />

      <Stack.Screen 
        name="Details" 
        component={Details}
        options={{
          title: 'Detalhes',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }} 
      />

      <Stack.Screen 
        name="Category" 
        component={CategoryPosts} 
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }}
      />

      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{
          title: 'Procurando algo?',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
