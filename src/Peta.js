import {Dimensions, Image, StatusBar, Text, View} from "react-native";
import React, {Component} from "react";
import {Header, Icon,PricingCard } from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import MapView from "react-native-maps";


export default class Peta extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0.4)"/>
                <Header
                    containerStyle={{
                        height:80
                    }}
                    backgroundColor='gray'
                    leftComponent={
                        <Ripple onPress={() => {
                            this.props.navigation.pop()
                        }}>
                            <Icon type='ionicon' name='arrow-back-outline' color='#fff'
                            /></Ripple>}

                    centerComponent={{text: 'Peta', style: {color: '#fff',fontWeight:'bold'}}}
                />
                <View style={{flex: 1}}>
                    {/*<MapView*/}
                    {/*    style={{width:Dimensions.get('window').width,height:200}}*/}
                    {/*    initialRegion={{*/}
                    {/*        latitude: parseFloat(this.state.dataDetail.lat),*/}
                    {/*        longitude: parseFloat(this.state.dataDetail.lng),*/}
                    {/*        latitudeDelta: 0.0043,*/}
                    {/*        longitudeDelta: 0.0034,*/}
                    {/*    }}*/}
                    {/*/>*/}
                </View>
            </View>
        );
    }


}
