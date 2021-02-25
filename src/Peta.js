import {Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
import {Avatar, Button, Header, Icon, ListItem} from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import MapView, {Marker} from "react-native-maps";
import {baseApi} from "./services/api";
import LoaderModal from "./components/LoaderModal";
import * as geolib from 'geolib';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Peta extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showTryAgain: false,
            loading: true,
            data: [],

            dataSource: [],

            lng: '',
            lat: '',
            jarakMeter: [],

            jarak: [],

            dataCurrent: [],

            mapRegion: null,
            hasLocationPermissions: false,
            locationResult: null,

            lokasi: null,

        };
    }

    componentDidMount() {
        this.getIndex();
        this._getLocationAsync();
    }

    _handleMapRegionChange = mapRegion => {
        console.log(mapRegion);
        this.setState({mapRegion});
    };

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({hasLocationPermissions: true});
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({locationResult: JSON.stringify(location)});

        // Center the map on the location we just fetched.
        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.4922,
                longitudeDelta: 0.4421
            }
        });

        let a = String(location.coords.latitude);
        let b = String(location.coords.longitude);


        this.state.data.push({
            lat: String(a),
            lng: String(b)
        })

        console.log(this.state.data)


    };

    getLocation = async () => {
        this.setState({
            loading: true,
            jarak: [],
            jarakMeter: [],
        });
        Location.requestPermissionsAsync().then((permission) => {
            if (permission.status !== 'granted') {
                console.log('Permission to access location was denied');
            } else {
                Location.requestPermissionsAsync().then((permission) => {
                    if (permission.status !== 'granted') {
                        console.log('Permission to access location was denied');
                    } else {
                        Location.getCurrentPositionAsync().then((pos) => {

                            // let jarak = geolib.getDistance({
                            //     latitude: pos.coords.latitude,
                            //     longitude: pos.coords.longitude
                            // }, this.state.dataSource);

                            for (let i = 0; i < this.state.data.length - 1; i++) {
                                var jarakMeter = geolib.getDistance({
                                    latitude: pos.coords.latitude,
                                    longitude: pos.coords.longitude
                                }, {
                                    latitude: this.state.data[i].lat,
                                    longitude: this.state.data[i].lng
                                });


                                var convertJarakKm = geolib.convertDistance(jarakMeter, 'km');
                                this.state.jarak.push({
                                    id: i,
                                    meter: convertJarakKm,
                                    sumber: this.state.data[i].sumber_data,
                                    uri: this.state.data[i].picture
                                })

                                if (jarakMeter <= 50) {
                                    alert('Anda mendekati titik rawan kecelekaan')
                                }

                                console.log(this.state.jarak)
                            }

                            this.setState({
                                loading: false,
                            });


                        });

                    }
                });

            }
        });


    }

    getIndex() {
        this.setState({
            loading: true,
            showTryAgain: false,
        });
        return fetch(baseApi + '/potensi-kecelakaan/latlng').then((response) => response.json()).then((responseJson) => {
            this.setState({
                loading: false,
                data: responseJson.results,
                showTryAgain: false,
            });
            for (let i = 0; i < this.state.data.length; i++) {
                this.state.dataSource.push({
                    latitude: this.state.data[i].lat,
                    longitude: this.state.data[i].lng
                })
            }

            console.log(this.state.data)

        }).catch((error) => {
            console.log(error);
            this.setState({
                loading: false,
                showTryAgain: true,
            });
        });
    }

    renderRow = ({item, index}) => {
        return (
            <ListItem
                key={index} bottomDivider>
                <Avatar rounded={true} avatarStyle={{width: 80, height: 80}} source={{uri: item.uri}}/>
                <ListItem.Content>
                    {/*<ListItem.Title>{item.sumber_data}</ListItem.Title>*/}
                    <ListItem.Subtitle style={{fontSize: 17}}>Jarak dari lokasi anda {item.meter} Km</ListItem.Subtitle>
                </ListItem.Content>

            </ListItem>
        );
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <LoaderModal
                    loading={this.state.loading}/>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0.4)"/>
                <Header
                    containerStyle={{
                        height: 80
                    }}
                    backgroundColor='#7F7DCC'
                    leftComponent={
                        <Ripple onPress={() => {
                            this.props.navigation.pop()
                        }}>
                            <Icon type='ionicon' name='arrow-back-outline' color='#fff'
                            /></Ripple>}

                    centerComponent={{text: 'Peta Bencana', style: {color: '#fff', fontWeight: 'bold'}}}
                />
                {this.state.showTryAgain === true ?
                    <View style={styles.container}>
                        <Text style={{color: 'gray'}}>Koneksi Bermasalah :(</Text>
                        <TouchableOpacity style={{
                            width: 200,
                            backgroundColor: 'red',
                            borderRadius: 25,
                            marginVertical: 2,
                            paddingVertical: 13,
                        }} onPress={() => this.getIndex()}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: '#ffffff',
                                textAlign: 'center',
                            }}>Refresh </Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={{flex: 1, backgroundColor: 'white'}}>

                        <MapView
                            onLayout={this.onMapReady}
                            style={{width: Dimensions.get('window').width, height: 320}}
                            // region={'Kota Padang'}
                            // initialRegion={{
                            //     latitude: -1.075139,
                            //     longitude: 100.415500,
                            //     latitudeDelta: 0.1143,
                            //     longitudeDelta: 0.1134,
                            // }}
                            region={this.state.mapRegion}
                            // onRegionChange={this._handleMapRegionChange}
                            // onRegionChange={'padang'}
                        >


                            {this.state.data.map((marker, index) => (
                                <Marker
                                    key={index}
                                    coordinate={{latitude: parseFloat(marker.lat), longitude: parseFloat(marker.lng)}}
                                    title='tes'
                                    description='Tes'
                                />
                            ))}
                        </MapView>

                        <View style={{alignItems: 'center'}}>
                            <Button
                                onPress={this.getLocation}
                                buttonStyle={{backgroundColor: '#7F7DCC', height: 60, width: 240, borderRadius: 30}}
                                containerStyle={{margin: 5, marginTop: 5}}
                                title="Update Lokasi"
                            />
                        </View>


                        <FlatList
                            // onEndReached={this.handleLoadMore}
                            // onEndReachedThreshold={0.1}
                            // ListFooterComponent={this.renderFooter}
                            renderItem={this.renderRow}
                            keyExtractor={(item, index) => index.toString()}
                            data={this.state.jarak}/>


                    </View>
                }

            </View>
        );
    }


}

const styles = StyleSheet.create({
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
    loader: {
        marginTop: 18,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 63,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 10,
    },
});
