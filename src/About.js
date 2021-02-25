import {StatusBar, Text, View} from "react-native";
import React, {Component} from "react";
import {Header, Icon,PricingCard } from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import * as Linking from "expo-linking";


export default class About extends Component {
    makeUrl = () => {
        Linking.openURL('https://dishub.sumbarprov.go.id/');
    };
    render() {

        return (
            <View style={{flex: 1}}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0.4)"/>
                <Header
                    containerStyle={{
                        height:80
                    }}
                    backgroundColor='#7F7DCC'
                    leftComponent={
                        <Ripple onPress={() => {
                            this.props.navigation.pop()
                        }}>
                            <Icon type='ionicon' name='arrow-back-outline' color='#fff'
                            /></Ripple>}

                    centerComponent={{text: 'About', style: {color: '#fff',fontWeight:'bold'}}}
                />
                <PricingCard
                    onButtonPress={()=>this.makeUrl()}
                    color="gray"
                    title="Aplikasi SALAMAIK"
                    info={['Aplikasi ini dibuat untuk melaporkan dan melihat informasi kecelakaan']}
                    button={{ title: ' Lihat Website Aplikasi Kecelakaan ', icon: 'flight-takeoff' }}
                />
            </View>
        );
    }


}
