//Script para el Login

import {Alert} from 'react-native'

const CASE_ONE = '1' //Usuario autentificado
const CASE_TWO = '2' //Incorrect password
const CASE_THREE = '3' //El usuario ya existe
const CASE_ZERO = '0' //Usuario no existe

const connectionLogin = function(code, password, navigation){
    //console.log("En script personalizado")

    var xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
            //console.log(xhttp.responseText);

            if (JSON.parse(xhttp.response)) {//Conexion exitosa
              let res = JSON.parse(xhttp.response);
              //console.log(res.totalCorredores);
              navigation.navigate('Main', {totalCorredores:res.totalCorredores, nombre:res.nombre, codigo:res.codigo, escuela:res.escuela});
              
            } else if (xhttp.responseText == CASE_TWO) {//Contraseña incorrecta
              Alert.alert('Error', 'Contraseña incorrecta :(', [
                //ACCIONES BOTONES
                {
                  text: 'OK',
                  onPress: () => console.log('pass error'),
                },
              ]);
            } else { //CASE_ZERO El usuario no existe
              Alert.alert('Error', 'El usuario no existe', [
                //ACCIONES BOTONES
                {
                  text: 'OK',
                  onPress: () => console.log('user error'),
                },
              ]);
            }
          }
            
        }

        xhttp.open('GET', 'https://programacionparainternetpract01.000webhostapp.com/login.php?codigo='+code+'&password='+password, true);
        xhttp.send();
}

const connectionRegister = function(nombre, codigo, correo, telefono, password, escuela, semestre, navigation){
  var xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200){
            //console.log(xhttp.responseText)

            if(xhttp.responseText == CASE_ONE){
              navigation.navigate('Login');
            }
            else if(xhttp.responseText == CASE_THREE){
              Alert.alert('Error', "El usuario ya existe",
              [//ACCIONES BOTONES
              {
                text: 'OK', onPress:()=>console.log("pass error")
              }]
              )
            }
            else{
              Alert.alert('Error', "Problemas al insertar usuario",
              [//ACCIONES BOTONES
              {
                text: 'OK', onPress:()=>console.log("insert user error")
              }]
              )
            }
          }
        }
        xhttp.open('GET', 'https://programacionparainternetpract01.000webhostapp.com/register.php?nombre='+nombre+'&codigo='+codigo+'&correo='+correo+'&telefono='+telefono+'&password='+password+'&escuela='+escuela+'&semestre='+semestre, true);
        xhttp.send();
}


export {connectionLogin, connectionRegister}