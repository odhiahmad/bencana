import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Icon} from 'react-native-elements';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require("./images/back.png")}
                style={{width: "100%", height: "100%"}}
            >
                {/*<View*/}
                {/*    style={{*/}
                {/*        flexDirection: "row",*/}
                {/*        marginTop: 40,*/}
                {/*        alignItems: "center",*/}
                {/*        paddingHorizontal: 40,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Icon name="menu" size={30} color="#a2a2db" style={{width: 20}}/>*/}
                {/*    <Icon*/}
                {/*        name="account-circle"*/}
                {/*        size={33}*/}
                {/*        color="#a2a2db"*/}
                {/*        style={{marginLeft: 230}}*/}
                {/*    />*/}
                {/*</View>*/}

                <View style={{paddingHorizontal: 40, marginTop: 40}}>
                    <Text
                        style={{
                            fontSize: 40,
                            color: "#522289",
                            fontFamily: "RobotoBold",
                        }}
                    >
                        Hello
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            paddingVertical: 10,
                            paddingRight: 80,
                            lineHeight: 22,
                            fontFamily: "RobotoRegular",
                            color: "#a2a2db",
                        }}
                    >
                        Selamat Datang di Aplikasi SALAMAIK Selamat Aman dari Bencana
                    </Text>
                    {/*<View*/}
                    {/*    style={{*/}
                    {/*        flexDirection: "row",*/}
                    {/*        backgroundColor: "#FFF",*/}
                    {/*        borderRadius: 40,*/}
                    {/*        alignItems: "center",*/}
                    {/*        paddingVertical: 10,*/}
                    {/*        paddingHorizontal: 20,*/}
                    {/*        marginTop: 30,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Image*/}
                    {/*        source={require("./images/search.png")}*/}
                    {/*        style={{height: 14, width: 14}}*/}
                    {/*    />*/}
                    {/*    <TextInput*/}
                    {/*        placeholder="Lorem ipsum"*/}
                    {/*        style={{paddingHorizontal: 20, fontSize: 15, color: "#ccccef"}}*/}
                    {/*    />*/}
                    {/*</View>*/}

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginRight: -40, marginTop: 70}}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Peta")}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#5facdb",
                            }}
                        >
                            <Icon type='ionicon' name='locate-outline' color='#fff'
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("PetaUmum")}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#ff5c83",
                                marginHorizontal: 22,
                            }}
                        >
                            <Icon type='ionicon' name='map-outline' color='#fff'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("NomorPenting")}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#ffa06c",
                            }}
                        >
                            <Icon type='ionicon' name='call-outline' color='#fff'/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("About")}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 66,
                                borderRadius: 50,
                                backgroundColor: "#bb32fe",
                                marginLeft: 22,
                            }}
                        >
                            <Icon type='ionicon' name='phone-portrait-sharp' color='#fff'/>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginRight: -40, marginTop: 35}}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("LaporanPengaduan")}
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: 66,
                                width: 330,
                                borderRadius: 50,
                                backgroundColor: "#3adcdd",
                            }}
                        >
                            <Icon type='font-awesome-5' name='book' color='#fff'
                            />
                        </TouchableOpacity>


                    </ScrollView>

                    <Text
                        style={{
                            color: "#FFF",
                            fontFamily: "RobotoRegular",
                            marginTop: 40,
                            fontSize: 17,
                        }}
                    >
                        Recommended
                    </Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginHorizontal: -40, marginTop: 20, marginLeft: -30}}
                    >
                        <View
                            style={{
                                backgroundColor: "#FEFEFE",
                                height: 180,
                                width: 190,
                                borderRadius: 15,
                                padding: 5,
                            }}
                        >
                            <Image
                                source={require("./images/1.jpg")}
                                style={{width: 180, borderRadius: 10, height: 130}}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "RobotoRegular",
                                            fontSize: 11,
                                            color: "#a2a2db",
                                        }}
                                    >
                                        Bukit Tinggi
                                    </Text>
                                </View>
                                <Icon type='ionicon' name='locate-outline' color="#ff5c83"/>
                            </View>
                        </View>

                        <View
                            style={{
                                backgroundColor: "#FEFEFE",
                                height: 180,
                                width: 190,
                                borderRadius: 15,
                                padding: 5,
                                marginHorizontal: 10,
                            }}
                        >
                            <Image
                                source={require("./images/2.jpg")}
                                style={{width: 180, borderRadius: 10, height: 130}}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "RobotoRegular",
                                            fontSize: 11,
                                            color: "#a2a2db",
                                        }}
                                    >
                                        Padang Panjang
                                    </Text>
                                </View>
                                <Icon type='ionicon' name='locate-outline' color="#ff5c83"/>
                            </View>
                        </View>

                        <View
                            style={{
                                backgroundColor: "#FEFEFE",
                                height: 180,
                                width: 190,
                                borderRadius: 15,
                                padding: 5,
                            }}
                        >
                            <Image
                                source={require("./images/3.jpg")}
                                style={{width: 180, borderRadius: 10, height: 130}}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    width: 150,
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 5,
                                        paddingVertical: 5,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "RobotoRegular",
                                            fontSize: 11,
                                            color: "#a2a2db",
                                        }}
                                    >
                                        Padang
                                    </Text>
                                </View>
                                <Icon type='ionicon' name='locate-outline' color="#ff5c83"/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}
