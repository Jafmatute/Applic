import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import  {Input, Icon, Button, CheckBox} from 'react-native-elements';


export default function FormRegister(){

    const [hidePassword,setHidePassword] = useState(true);
    const [hideRepeatPass,setHideRepeatPass] = useState(true);

    const register = () => {

        console.log('usuario registrado');
    }

    return(

        <View style={stylesFormRegister.formContainer}
        >

            <Input placeholder='Ingrese su nombre completo'
                   containerStyle={stylesFormRegister.inputForm}
                   onChange={()=> console.log('name')}
                   rightIcon={

                    <Icon type='material-community'
                          name='account-question-outline' 
                          iconStyle={stylesFormRegister.iconRiht}         
                    />

                   }
            
            
            />

            <Input placeholder='Correo Electronico'
                   containerStyle={stylesFormRegister.inputForm}
                   onChange={()=> console.log('email')}
                   rightIcon={

                    <Icon type='material-community'
                          name='at'
                          iconStyle={stylesFormRegister.iconRiht}
                    />

                   }
            />

            <Input placeholder='Contraseña'
                   password={true}
                   secureTextEntry={hidePassword}
                   containerStyle={stylesFormRegister.inputForm}
                   onChange={()=> console.log('password')}
                   rightIcon={

                    <Icon type='material-community'
                          name={hidePassword ? 'eye-outline' :'eye-off-outline'  }
                          iconStyle={stylesFormRegister.iconRiht}
                          onPress={()=>setHidePassword(!hidePassword)}                  
                    />

                   } 
            
            />

            <Input placeholder='Repetir contraseña'
                   password={true}
                   secureTextEntry={hideRepeatPass}
                   containerStyle={stylesFormRegister.inputForm}
                   onChange={()=> console.log('Repetir password')}
                   rightIcon={

                    <Icon type='material-community'
                          name={hideRepeatPass ? 'eye-outline' : 'eye-off-outline'}
                          iconStyle={stylesFormRegister.iconRiht}
                          onPress={()=>setHideRepeatPass(!hideRepeatPass)}
                    
                    />
                   }            
            />

            <CheckBox title='Acuerdo de confidencialidad e integridad de la información.'
                      textStyle={stylesFormRegister.acuerdo}
                      checked={false}
            />

            <Button title='Unirse'
                    containerStyle={stylesFormRegister.btnContainerRegister}
                    buttonStyle={stylesFormRegister.btnRegister}
                    onPress={register}  
            />

        </View>
    )

}

const stylesFormRegister = StyleSheet.create({

    formContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:35
    },
    inputForm:{
       width:'100%',
       marginTop:20 
    },
    iconRiht:{
        color:'#c1c1c1'
    },
    acuerdo:{
        color:'orange'
    },
    btnContainerRegister:{
        marginTop:20,
        width:'95%'
    },
    btnRegister:{
        backgroundColor:'#2089dc'
    },
    textRegister:{
        textAlign:"center",
        marginTop:10,
        fontWeight:"bold"
    }
})