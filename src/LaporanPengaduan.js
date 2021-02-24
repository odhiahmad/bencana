import {Image, StatusBar, StyleSheet, View, TextInput, Alert} from "react-native";
import React from "react";
import {Button, Header, Icon} from 'react-native-elements';
import Ripple from "react-native-material-ripple";
import * as ImagePicker from 'expo-image-picker';
import {baseApi} from "./services/api";
import LoaderModal from "./components/LoaderModal";
import {showMessage} from "react-native-flash-message";
import ValidationComponent from 'react-native-form-validator';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class LaporanPengaduan extends ValidationComponent {
    constructor(props) {

        super(props);
        this.state = {
            loadingModal: false,
            loading: false,
            showTryAgain: false,


            tanggal: '',
            nama: '',
            email: '',
            no_hp: '',
            gambar: '',
            pesan: '',
            file_ext: '',

            uri: '',
            date: new Date(1598051730000),

            setShow: false,

        };
    }


    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });


        if (!result.cancelled) {

            let uri = result.uri;
            let fileExtension = uri.substr(uri.lastIndexOf('.') + 1);
            this.setState({
                gambar: result.base64,
                file_ext: fileExtension,
                uri: result.uri
            })

            console.log(this.state.file_ext);
        }
    };


    showDatepicker = () => {
        if (Platform.OS === 'ios') {
            this.setState({
                setShow: true
            })
        }


    };


    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        if (Platform.OS === 'ios') {
            this.setState({
                setShow: true
            })
        }
        this.setState({
            date: currentDate
        })
    };

    _onSubmit() {

        this.validate({
            nama: {required: true},
            email: {required: true},
            no_hp: {required: true},
            gambar: {required: true},
            pesan: {required: true},

        });
        if (this.isFormValid()) {
            this.setState({
                loading: true,
            });
            fetch(baseApi + '/pengaduan/form', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama_lengkap: this.state.nama,
                    email: this.state.email,
                    no_telp: this.state.no_hp,
                    file: this.state.gambar,
                    pesan: this.state.pesan,
                    file_ext: this.state.file_ext
                }),
            }).then((response) => response.json()).then((responseJson) => {


                if (responseJson.status === true) {
                    console.log(responseJson.status)
                    this.setState({
                        loading: false,
                        nama: '',
                        email: '',
                        no_hp: '',
                        gambar: '',
                        pesan: '',
                        file_ext: '',
                    });

                    Alert.alert(
                        "Notifikasi",
                        "Berhasil menginputkan data laporan",
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );


                } else {

                    this.setState({
                        loading: false,

                    });

                    Alert.alert(
                        "Notifikasi",
                        "Gagal",
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    );

                }


            }).catch((error) => {

                this.setState({
                    loading: false,
                });

                Alert.alert(
                    "Notifikasi",
                    "Gagal",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
            });
        } else {

            Alert.alert(
                "Notifikasi",
                "Isi Semua Data Dengan Benar",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            console.log('Gagal')

        }

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <LoaderModal
                    loading={this.state.loading}/>
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

                    centerComponent={{text: 'Laporan Pengaduan', style: {color: '#fff', fontWeight: 'bold'}}}
                />
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                }}>
                <TextInput
                    value={this.state.nama}
                    onChangeText={(nama) => this.setState({nama})}
                    placeholder='Nama'
                    clearButtonMode='always'

                    selectionColor="#999999"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    autoCapitalize='words'
                    style={styles.inputBox}
                />
                <TextInput
                    value={this.state.email}
                    keyboardType={"email-address"}
                    onChangeText={(email) => this.setState({email})}
                    placeholder='Email'
                    clearButtonMode='always'

                    selectionColor="#999999"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    autoCapitalize='words'
                    style={styles.inputBox}
                />
                <TextInput
                    value={this.state.no_hp}
                    keyboardType={"numeric"}
                    onChangeText={(no_hp) => this.setState({no_hp})}
                    placeholder='Nomor HP'
                    clearButtonMode='always'

                    selectionColor="#999999"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    autoCapitalize='words'
                    style={styles.inputBox}
                />
                <TextInput
                    value={this.state.pesan}
                    onChangeText={(pesan) => this.setState({pesan})}
                    placeholder='Pesan'
                    clearButtonMode='always'

                    selectionColor="#999999"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    autoCapitalize='words'
                    style={styles.inputBox}
                />

                {this.state.uri !== '' ?
                    <View style={{
                        flex: 1, justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={{uri: this.state.uri}} style={{
                            width: 120,
                            height: 120,
                            marginBottom: 5
                        }}/>
                    </View>
                    :
                    <View></View>
                }


                <Button
                    buttonStyle={{backgroundColor: 'rgba(29, 163, 11,0.8)',height:60,width:240,borderRadius:30}}
                    onPress={this.pickImage}
                    containerStyle={{margin: 5}}
                    title="Upload Foto"
                />


                <Button
                    onPress={this._onSubmit.bind(this)}
                    buttonStyle={{backgroundColor: 'red',height:60,width:240,borderRadius:30}}
                    containerStyle={{margin: 5, marginTop: 5}}
                    title="Submit Laporan"
                />
                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    inputTextStyle: {
        paddingTop: 30
    },
    inputBox: {
        height:60,
        width:500,
        maxWidth: 400,
        // backgroundColor: '#7F7DCC',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
        marginVertical: 5,
    },


});
