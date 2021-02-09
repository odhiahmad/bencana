import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import PetaUmum from './src/PetaUmum'
import About from './src/About'
import LaporanPengaduan from './src/LaporanPengaduan'
import Peta from './src/Peta'
import NomorPenting from './src/NomorPenting'


const Stack = createStackNavigator();



function DetailsScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" options={{
            headerShown: false,
          }} component={HomeScreen} />
            <Stack.Screen name="PetaUmum" options={{
                headerShown: false,
            }} component={PetaUmum} />
            <Stack.Screen name="Peta" options={{
                headerShown: false,
            }} component={Peta} />
            <Stack.Screen name="About" options={{
                headerShown: false,
            }} component={About} />
            <Stack.Screen name="LaporanPengaduan" options={{
                headerShown: false,
            }} component={LaporanPengaduan} />
            <Stack.Screen name="NomorPenting" options={{
                headerShown: false,
            }} component={NomorPenting} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


