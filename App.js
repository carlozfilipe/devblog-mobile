import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#232630" barStyle="light-content" />
      <StatusBar style="auto" />
      <Routes />     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
