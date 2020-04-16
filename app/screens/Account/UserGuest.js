import React  from 'react';
import { StyleSheet,View, Text, ScrollView, Image} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import logo from '../../../assets/img/logo.jpg';

export default function UserGuest(propsNavigation)  {
    console.log(propsNavigation);
    const {props} = propsNavigation;
    return(
      
     <ScrollView style={stylesGuest.viewBody} centerContent={true} >

        <Image 
        source={logo} 
        style={stylesGuest.image}
         resizeMode="contain"
        />

        <Text style={stylesGuest.title}>
        Consulta tù perfil  <Text style={stylesGuest.findit}>Findit</Text>
        </Text>

        <Text style={stylesGuest.descrption} >
        ¿Como determinarias la mejor elección de compra? Busca y visualiza los mejores precios de tus productos
        de una forma sencilla, elige la mejor opción.
        </Text>

        <View style={stylesGuest.viewBtn}>

        <Button buttonStyle={stylesGuest.button}
                containerStyle={stylesGuest.containerBtn}              
                onPress={() => props.navigate('Login')}
                icon={
                    <Icon
                    type="material-community"
                    name="arrow-right"
                    size={30}
                    color="orange"
                    />
                }
        />

        </View>

        <Text style={stylesGuest.perfil} >Ingresa a tù perfil</Text>

     </ScrollView>
        
    )
}




const stylesGuest = StyleSheet.create({

    viewBody: {
        marginLeft:30,
        marginRight:30,
        
    },
    image:{
        height:300,
        width:"100%",
        //marginBottom:10        

    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        marginBottom:10,
        textAlign:"center"  
    },
    findit:{
        color: '#2089dc',
        fontSize:30
    },
    description:{
        textAlign:"center",
        marginBottom:20
    },
    viewBtn:{
        flex:1,
        alignItems:"center",
        marginTop:20
        

    },
    button:{
        backgroundColor:"#2089dc",
        borderRadius:50,
        
    },
    containerBtn:{   
        width:"15%"    
    },
    perfil:{
        textAlign:"center",
        marginTop:10,
        fontWeight:"bold"
    }

});