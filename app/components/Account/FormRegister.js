import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import  {Input, Icon, Button, CheckBox} from 'react-native-elements';
import  {validateEmail} from '../../utils/Validations';
import * as firebase from 'firebase';


export default function FormRegister(){

    const [hidePassword,setHidePassword] = useState(true);
    const [hideRepeatPass,setHideRepeatPass] = useState(true);


    const [dataForm, setDataForm] = useState({
      name: "",
      email: "",
      password: "",
      confirPass:""
    });

    const hanldeChange = (e,text) => {
      //console.log(e);
      setDataForm({
      ...dataForm,
      [text]: e.nativeEvent.text
      });
    };

     const register = async () => {

      const {name,email,password,confirPass} = dataForm;

      if(!email || !password || !name || !confirPass) {

        console.log('todos los campos son obligatorios');

      }else{

        if(!validateEmail(email)) {

          console.log('email invalido');

        }else{

          if(password !== confirPass) {

            console.log('las conrtraseñas no son iguales');
          }else{

            await firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(()=> {

                console.log('usuario creado con éxito');

              }).catch((e)=>{

                console.log('error al crear el usuario');
                let errorCode = e.code;
                let errorMsj= e.message;

                console.log(errorCode);
                console.log(errorMsj);

              });
          }

        }

      }

    };

    return(

        <View style={stylesFormRegister.formContainer}
        >

            <Input placeholder='Ingrese su nombre completo'
                   containerStyle={stylesFormRegister.inputForm}
                   onChange={text => hanldeChange(text, 'name')}
                   rightIcon={

                    <Icon type='material-community'
                          name='account-question-outline' 
                          iconStyle={stylesFormRegister.iconRiht}         
                    />

                   }
            
            
            />

            <Input placeholder='Correo Electronico'
                   containerStyle={stylesFormRegister.inputForm}
                   onChange={text => hanldeChange(text, 'email')}
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
                   onChange={text => hanldeChange(text, 'password')}
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
                   onChange={text => hanldeChange(text, 'confirPass')}
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