import {ScrollView, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

//import Icon from 'react-native-vector-icons/AntDesign';
//import Icon from "react-native-vector-icons";

//Icon.loadFont();

//Imports react
import {Dimensions, ImageBackground} from 'react-native';
import {
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Alert,
} from 'react-native';

//Import from react-native elements
import {Input, Icon}  from 'react-native-elements';

// import { Button } from 'react-native-elements/dist/buttons/Button';
// import { Input } from 'react-native-elements/dist/input/Input';
// import { Icon } from 'react-native-elements';
//import {ImageBackground} from 'react-native-elements/dist/config';
import {Button} from 'react-native-elements/dist/buttons/Button';

//My scripts
import {connectionLogin} from './scripts/dataBase';

//Navigation
import {NavigationContext} from '@react-navigation/native';

//Global
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

//********** Main **********
export default class Login extends Component {
  //********** Declaracion de variables **********
  constructor(props) {
    super(props);
    this.state = {
      textCode: null,
      textPassword: null,
    };
  }

  //Navigation
  static contextType = NavigationContext;

  render() {
    //********** declaracion de acciones (botones, sliders, etc) **********
    //Navigation
    const navigation = this.context;

    //Buttons
    const btnLogin = () => {
      connectionLogin(this.state.textCode, this.state.textPassword, navigation);
    };

    const btnRegister = () => {
      navigation.navigate('Register');
    };

    //********** Return **********
    return (
      <View style={styles.main}>
        <ImageBackground
          style={styles.heroImage}
          //source={require('./images/fondo3.jpg')}>
          source={{uri:"https://image.freepik.com/vector-gratis/fondo-geometrico-abstracto-dorado-negro_1419-2290.jpg"}}>
          
          <View style={styles.heroImageOpacity}>
            <KeyboardAvoidingView
              style={styles.main}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  //source={require('./images/logoV4.png')}></Image>
                  source={{uri:"https://www.elhorizonte.mx/images/tnfocus/0/0/954/636/2018/09/07/escudoudg_1.jpg"}}
                />
              </View>
              <View style={styles.inputContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.inner}>
                    <Input
                      onChangeText={textCode => this.setState({textCode})}
                      style={styles.input}
                      keyboardType="number-pad"
                      placeholder="Codigo"
                      leftIcon={
                        <Icon 
                        name='person'
                        size={24} 
                        color="white" />
                      }
                    />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.inner}>
                    <Input
                      onChangeText={textPassword =>
                        this.setState({textPassword})
                      }
                      style={styles.input}
                      secureTextEntry={true}
                      placeholder="Contraseña"
                      leftIcon={
                        <Icon 
                        name="lock" 
                        size={24} 
                        color="white" />
                      }
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </KeyboardAvoidingView>
            <View style={styles.btnContainer}>
              <Button
                onPress={btnLogin}
                title="Entrar"
                //style={styles.btn}
                buttonStyle={{
                  backgroundColor: 'black', //'rgba(255, 161, 61, 1)',
                  borderRadius: 100,
                }}
                containerStyle={{
                  width: WIDTH / 2,
                }}
              />
            </View>
            <View style={styles.registerContainer}>
              <Text style={styles.register} onPress={btnRegister}>
                Registrarse
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

//********** Styles **********
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  heroImage: {
    height: HEIGHT,
  },
  heroImageOpacity: {
    height: HEIGHT,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  logoContainer: {
    flex: 2,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: '80%',
    height: '80%',
  },
  inputContainer: {
    flex: 2,
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    marginLeft: '5%',
    color: 'white',
  },
  registerContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    color: 'white',
    fontSize: 16,
  },

  container: {
    flex: 1,
  },
  inner: {
    width: '100%',
    padding: 34,
    flex: 1,
    justifyContent: 'space-around',
  },
});
