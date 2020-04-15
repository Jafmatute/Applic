import React, {useState, useEffect} from "react";
import {View , Text} from "react-native";
import * as firebase from 'firebase';


export default function MyAccount({navigation}) {

    const [login, setLogin] = useState(null);

    useEffect( () => {

        firebase.auth().onAuthStateChanged( user => {

            !user ? setLogin(false) : setLogin(true);
            console.log(user);
        });

    }, []);

    if(login===null){
        return(

            <View>
    
                <Text>Cargando..</Text>
            </View>
        )
    }

    if(login) {
        return(
            <View>
                <Text>Usuario Logeado!</Text>
            </View>
        )
    }

    return(

        <View><Text>No autorizdo.</Text></View>
    )
    

}

