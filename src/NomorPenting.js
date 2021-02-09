import {StatusBar, Text, View} from "react-native";
import React, {Component} from "react";
import {Header, Icon, ListItem, PricingCard} from 'react-native-elements';
import Ripple from "react-native-material-ripple";


export default class NomorPenting extends Component {
    render() {
        const list = [
            {
                title: 'Polisi',
                icon: 'av-timer'
            },
            {
                title: 'LLAJ',
                icon: 'flight-takeoff'
            },

        ]
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

                    centerComponent={{text: 'Nomor Penting', style: {color: '#fff',fontWeight:'bold'}}}
                />
                {
                    list.map((item, i) => (
                        <ListItem key={i} bottomDivider>
                            <Icon name={item.icon} />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))
                }

            </View>
        );
    }


}