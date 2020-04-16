import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import logo from '../../../assets/img/register.png';

export default function Register({navigation}) {

    return(

        <KeyboardAwareScrollView>
        <Image source={logo}
               style={stylesRegister.logo}
               resizeMode='contain'
         />

         <View style={stylesRegister.viewForm} >

            <Text>Formulario de registro...</Text>

         </View>
      </KeyboardAwareScrollView>
    )
}

const stylesRegister = StyleSheet.create({

    logo:{
      width:'100%',
      height:150,
      marginTop:20  
    },
    viewForm:{
       marginRight:40,
       marginLeft:40

    }
})