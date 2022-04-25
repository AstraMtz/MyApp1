import { Text, View, StyleSheet, Image, ImageBackground, Alert, ScrollView } from 'react-native';
import React, { Component } from 'react';

//import { Input, Icon, Button } from 'react-native-elements';

import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements';

//My scripts
import {connectionRegister} from './scripts/dataBase';

//Navigation
import {NavigationContext} from '@react-navigation/native';
import { color } from 'react-native-reanimated';

//Global
const HEIGHT = '100%'//Dimensions.get('window').height
const WIDTH = '100%'//Dimensions.get('window').width


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "", 
      codigo: "", 
      correo: "", 
      telefono: "", 
      password: "", 
      escuela: "", 
      semestre: ""
    };
  }

  //Navigation
  static contextType = NavigationContext;

  render() {
    //Navigation
    const navigation = this.context;
    
    const btnRegister = ()=>{
      let todoBien = true

      Object.values(this.state).forEach((el)=>{//Revisar que ningun campo este vacio
        if(el===""){
          todoBien = false
        }
      })

      if(todoBien){//Registrar usuario en la base de datos
        connectionRegister(this.state.nombre, this.state.codigo, this.state.correo, this.state.telefono, this.state.password, this.state.escuela, this.state.semestre, navigation)
        Alert.alert('Ok', 'Usuario Registrado', [
          //ACCIONES BOTONES
          {
            text: 'OK',
            onPress: () => console.log('campos vacios'),
          },
        ]);
      }
      else{//Hay uno o mas campos vacios
        Alert.alert('Error', 'Llena todos los campos', [
          //ACCIONES BOTONES
          {
            text: 'OK',
            onPress: () => console.log('campos vacios'),
          },
        ]);
      }
    }

    return (
        <View style={styles.mainView}>
        <ImageBackground style={styles.background}
        //</View>source={require('./images/fondo1.jpg')}>
        source={{uri:"https://image.freepik.com/vector-gratis/fondo-geometrico-abstracto-dorado-negro_1419-2290.jpg"}}>
        
          <View style={styles.opacity}>
            <View style={styles.registerTitleContainer}>
            <Text style={styles.registerTitle}>Carrera CUCEI</Text>
            </View>
            <ScrollView style={styles.inputContainer}>
            <Input 
            onChangeText={nombre => this.setState({nombre})}
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor='white'
            leftIcon={<Icon name='person' size={24} color="white" />}
            />
            <Input 
            onChangeText={telefono => this.setState({telefono})}
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Telefono"
            placeholderTextColor='white'
            leftIcon={<Icon name="call" size={24} color="white" />}
            />
            <Input 
            onChangeText={correo => this.setState({correo})}
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor='white'
            leftIcon={<Icon name="mail" size={24} color="white" />}
            />
            <Input 
            onChangeText={codigo => this.setState({codigo})}
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Codigo"
            placeholderTextColor='white'
            leftIcon={<Icon name="code" size={24} color="white" />}
            />
            <Input 
            onChangeText={escuela => this.setState({escuela})}
            style={styles.input}
            placeholder="Escuela"
            placeholderTextColor='white'
            leftIcon={<Icon name="school" size={24} color="white" />}
            />
            <Input 
            onChangeText={semestre => this.setState({semestre})}
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Semestre"
            placeholderTextColor='white'
            leftIcon={<Icon name="grade" size={24} color="white" />}
            />
            <Input
            onChangeText={password => this.setState({password})}
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor='white'
            leftIcon={<Icon name="lock" size={24} color="white" />}
            />
            </ScrollView>
            <Button
            onPress={btnRegister}
            title='Registrar'
            buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 30,
              width: '50%',
            }}
            containerStyle={{
              width: WIDTH,
              marginHorizontal: 'auto',
              marginTop: 0,
              marginBottom: 10,
              alignItems: 'center',
            }}
            titleStyle={{fontWeight: 'bold'}}
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

//Styles
const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      width: WIDTH,
      height: HEIGHT,
    },
    background: {
      width: WIDTH,
      height: HEIGHT,
    },
    opacity: {
      flex: 1,
      width: WIDTH,
      height: HEIGHT,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
    },
    registerTitleContainer:{
      width: "80%",
      marginTop: "3%",
      alignSelf: "center",
    },
    registerTitle:{
      textAlign: "center",
      fontSize: 30,
      color: "white",
      borderRadius: 300,
      backgroundColor: 'dark',
    },
    inputContainer:{
      margin: '5%',
      borderRadius: 30,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    input:{
      flex: 1,
      color: 'white',
      //backgroundColor: 'blue'
    }
  
  })