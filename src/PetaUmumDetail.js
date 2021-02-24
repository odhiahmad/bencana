import {Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import React, {Component} from "react";
import {Header, Icon} from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import LoaderModal from "./components/LoaderModal";
import WebView from "react-native-webview";

import MapView from 'react-native-maps';

export default class PetaUmumDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingModal: false,
            loading: false,
            showTryAgain: false,
            isLoading: true,
            dataSource: null,
            data: [],
            dataDetail: [],
            isLoadingDataModal: true,
            isModalVisible: false,
            modalVisible: false,
            urlImage: '',
            searchAktif: 0
        };
    }

    componentDidMount() {
        const {dataItem} = this.props.route.params;

        this.setState({
            dataDetail: dataItem
        })
    }


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
                        <Ripple onPress={() => this.props.navigation.pop()}>
                            <Icon type='ionicon' name='arrow-back-outline' color='#fff'
                            /></Ripple>}
                    statusBarProps={{barStyle: 'light-content'}}
                    barStyle="light-content"
                    placement="center"
                    centerComponent={{text: 'Peta Umum Detail', style: {color: '#fff', fontWeight: 'bold'}}}
                />
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                    <Image source={{uri: this.state.dataDetail.picture}} style={{
                        width: Dimensions.get('window').width,
                        height: 200,
                    }}/>
                    {this.state.dataDetail.length === 0 ?
                        <View></View> : <MapView
                            onLayout={this.onMapReady}
                            style={{width: Dimensions.get('window').width, height: 200}}
                            initialRegion={{
                                latitude: parseFloat(this.state.dataDetail.lat),
                                longitude: parseFloat(this.state.dataDetail.lng),
                                latitudeDelta: 0.0043,
                                longitudeDelta: 0.0034,
                            }}
                        />
                    }

                    <View style={{flex: 1, marginHorizontal: 10}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Permasalahan :</Text>
                        <WebView
                            source={{html: '<h1>' + this.state.dataDetail.permasalahan + '</h1>'}}
                            style={{marginTop: 5, height: 200}}
                        />
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rekomendasi :</Text>
                        <WebView
                            style={{marginTop: 5, height: 200}}
                            originWhitelist={['*']}
                            source={{html: '<h1>' + this.state.dataDetail.rekomendasi + '</h1>'}}

                        />
                    </View>
                </ScrollView>
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
        backgroundColor: '#fff',
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
