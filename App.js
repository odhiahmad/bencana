import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/HomeScreen'
import PetaUmum from './src/PetaUmum'
import PetaUmumDetail from './src/PetaUmumDetail'
import About from './src/About'
import LaporanPengaduan from './src/LaporanPengaduan'
import Peta from './src/Peta'
import NomorPenting from './src/NomorPenting'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();


function DetailsScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default class App extends React.Component {
    state = {
        isFontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            'RobotoBold': require('./src/fonts/Roboto-Bold.ttf'),
            'RobotoRegular': require('./src/fonts/Roboto-Regular.ttf'),
        })

        this.setState({
            isFontLoaded: true
        })
    }

    render() {


        return (
            (this.state.isFontLoaded === true) ?
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="HomeScreen">
                        <Stack.Screen name="HomeScreen" options={{
                            headerShown: false,
                        }} component={HomeScreen}/>
                        <Stack.Screen name="PetaUmum" options={{
                            headerShown: false,
                        }} component={PetaUmum}/>
                        <Stack.Screen name="PetaUmumDetail" options={{
                            headerShown: false,
                        }} component={PetaUmumDetail}/>
                        <Stack.Screen name="Peta" options={{
                            headerShown: false,
                        }} component={Peta}/>
                        <Stack.Screen name="About" options={{
                            headerShown: false,
                        }} component={About}/>
                        <Stack.Screen name="LaporanPengaduan" options={{
                            headerShown: false,
                        }} component={LaporanPengaduan}/>
                        <Stack.Screen name="NomorPenting" options={{
                            headerShown: false,
                        }} component={NomorPenting}/>
                    </Stack.Navigator>
                </NavigationContainer> :
                <AppLoading/>
        );
    }
}


