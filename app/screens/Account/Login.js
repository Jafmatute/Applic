import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import {Divider} from 'react-native-elements';
import loginLogo from '../../../assets/img/login.png';

export default function Login({navigation}) {

    console.log(navigation);

    return(
        <ScrollView>

            <Image source={loginLogo}
                  style={stylesLogin.logo}
                  resizeMode='contain'
                />       
           <View style={stylesLogin.viewContainer} >

            <Text>Login..</Text>
            <Text>Create account</Text>

           </View>

           <Divider style={stylesLogin.dividir} />

           <View style={stylesLogin.viewContainer} >

            <Text>Login Facebook.</Text>

           </View>

        </ScrollView>
          
    );

}

const stylesLogin = StyleSheet.create({

    logo:{
        width:'100%',
        height:150,
        marginTop:50
    },
    viewContainer:{
       marginRight:40,
       marginLeft:40 
    },
    dividir:{
        backgroundColor:'#00a680',
        margin:40
    }

});