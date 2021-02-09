import {StatusBar, Text, TouchableOpacity, View,StyleSheet,ScrollView} from "react-native";
import React, {Component} from "react";
import {Header, Icon, Tile, ListItem, Button} from 'react-native-elements';
import Ripple from "react-native-material-ripple";



export default class HomeScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0.4)"/>
                <Header
                    containerStyle={{
                        height:80
                    }}
                    backgroundColor='gray'
                    centerComponent={{ text: 'SIPENDEKAR', style: { color: '#fff',fontWeight:'bold' } }}
                />
                <ScrollView>
                <Tile
                    height={240}
                    imageSrc={require('./images/puncak_mandeh.jpg')}
                    title="SELAMAT AMAN DARI BENCANA"
                    featured
                />
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{marginHorizontal: 0, flexDirection: 'row'}}>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginHorizontal: 5,
                        }}>
                            <View style={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                height: '100%',
                                width: '100%',
                            }}>
                                <Ripple
                                    onPress={() => navigate("PetaUmum")}
                                    style={{
                                        marginRight: 2,
                                        width: '50%',
                                        height: '100%',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            margin: 10,
                                            width: 120,
                                            height: 120,
                                            borderWidth: 1,
                                            borderColor: 'gray',
                                            borderRadius: 70,
                                            justifyContent: 'center',
                                        }}>
                                        <Icon
                                            iconStyle={{
                                                color:'white'
                                            }}
                                            size={50}
                                            reverse
                                            name='building'
                                            type='font-awesome'
                                            color='#0028f0'
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            marginBottom: 6,
                                        }}>Daerah Rawan</Text>
                                </Ripple>
                                <Ripple
                                    onPress={() => navigate("Peta")}
                                    // onPress={!this.state.inClickHome ? this.onClickButtonHome : null}
                                    style={{
                                        marginRight: 2,
                                        width: '50%',
                                        height: '60%',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            margin: 10,
                                            width: 120,
                                            height: 120,
                                            borderWidth: 1,
                                            borderColor: 'gray',
                                            borderRadius: 70,
                                            justifyContent: 'center',
                                        }}>
                                        <Icon
                                            iconStyle={{
                                                color:'white'
                                            }}
                                            size={50}
                                            reverse
                                            name='map'
                                            type='font-awesome'
                                            color='#0028f0'
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            marginBottom: 6,
                                        }}>Peta</Text>
                                </Ripple>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal: 0, flexDirection: 'row'}}>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginHorizontal: 5,
                        }}>
                            <View style={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                height: '100%',
                                width: '100%',
                            }}>
                                <Ripple
                                    onPress={() => navigate("NomorPenting")}
                                    style={{
                                        marginRight: 2,
                                        width: '50%',
                                        height: '100%',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            margin: 10,
                                            width: 120,
                                            height: 120,
                                            borderWidth: 1,
                                            borderColor: 'gray',
                                            borderRadius: 70,
                                            justifyContent: 'center',
                                        }}>
                                        <Icon
                                            iconStyle={{
                                                color:'white'
                                            }}
                                            size={50}
                                            reverse
                                            name='phone'
                                            type='font-awesome'
                                            color='#0028f0'
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            marginBottom: 6,
                                        }}>Nomor Penting</Text>
                                </Ripple>
                                <Ripple
                                    onPress={() => navigate("About")}
                                    // onPress={!this.state.inClickHome ? this.onClickButtonHome : null}
                                    style={{
                                        marginRight: 2,
                                        width: '50%',
                                        height: '60%',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={{
                                            margin: 10,
                                            width: 120,
                                            height: 120,
                                            borderWidth: 1,
                                            borderColor: 'gray',
                                            borderRadius: 70,
                                            justifyContent: 'center',
                                        }}>
                                        <Icon
                                            iconStyle={{
                                                color:'white',
                                            }}
                                            size={50}
                                            reverse
                                            name='fire'
                                            type='font-awesome'
                                            color='#0028f0'
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 19,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            marginBottom: 6,
                                        }}>About</Text>
                                </Ripple>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', padding: 5,flex: 1,
                        alignItems:'center',
                        justifyContent: 'flex-end',
                        marginTop:20,
                        marginBottom: 10}}>
                        <Button
                            // onPress={() => navigate("LaporanPengaduan")}
                            titleStyle={{fontSize:25}}
                            buttonStyle={{backgroundColor:'#b50000',height:80,borderRadius:20,width:200}}
                            icon={
                                <Icon
                                    name="phone"
                                    size={25}
                                    color="white"
                                    type="font-awesome-5"
                                />
                            }
                            iconRight
                            title="Laporkan "
                        />
                    </View>

                </View>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    ripleContainer: {
        padding: 16,
        backgroundColor: '#F5F5F5',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        minHeight: 56,
        margin: 4,
        borderRadius: 15,
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    buttonRiple: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: 80,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 2,
        padding: 5,
    },
    buttonRiple2: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: 110,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 2,
        padding: 5,
    },
    a: {
        backgroundColor: '#1da30b',
    },
    textButton: {
        fontSize: 12,
        fontWeight: '500',
        color: 'gray',
    },
    text: {
        fontSize: 30,
        fontWeight: '500',
        color: 'rgba(255,255,255,.87)',
    },

    footnote: {
        fontSize: 15,
        fontWeight: '400',
        color: 'rgba(0,0,0,.54)',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1: {},
    view2: {},
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
    },
    button: {
        width: 300,
        backgroundColor: 'orange',
        borderRadius: 25,
        marginVertical: 2,
        paddingVertical: 13,
    },
});
