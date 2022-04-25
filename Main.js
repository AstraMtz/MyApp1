import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { Component } from 'react'

//Navigation
import {NavigationContext} from '@react-navigation/native';

//Side drawer 
import MenuDrawer from 'react-native-side-drawer'

//Avatar
import { Avatar } from 'react-native-elements';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCorredores: props.route.params.totalCorredores,
      nombre: props.route.params.nombre,
      codigo: props.route.params.codigo,
      escuela: props.route.params.escuela,
      //Side drawer
      open: false
    };
    
    console.log(this.state.totalCorredores)
  }

  //Side drawer
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <View style={styles.btnCloseContainer}>
          <Text onPress={this.toggleOpen} style={styles.btnClose}>X</Text>
        </View>
        <View style={styles.avatarContainer}>
        <Avatar
              size={84}
              rounded
              source={{ uri: "https://cdn.dribbble.com/users/206362/screenshots/14453538/media/cfe80febeed64218b34e18f518ca9ae9.jpg?compress=1&resize=400x300" }}
            />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>{this.state.escuela}</Text>
          <Text style={styles.text}>{this.state.codigo}</Text>
          <Text style={styles.text}>{this.state.nombre}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <ImageBackground
          style={styles.heroImage}
          //</View>source={require('./images/fondo2.jpg')}>
          source={{uri:"https://img.freepik.com/vector-gratis/fondo-hexagonal-oscuro-color-degradado_79603-1409.jpg?size=626&ext=jpg"}}>
          <View style={styles.heroImageOpacity}>
            <View style={styles.container}>
              <MenuDrawer
                open={this.state.open}
                position={'left'}
                drawerContent={this.drawerContent()}
                drawerPercentage={65}
                animationTime={250}
                overlay={true}
                opacity={0.4}>
                <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
                  <Text>Menu</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Total Corredores: {this.state.totalCorredores}</Text>
              </MenuDrawer>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
  heroImage:{
    flex: 1,
    height: "100%"
  },
  heroImageOpacity:{
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 0,
    zIndex: 0,
  },
  animatedBox: {//Caja lateral
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10
  },
  body: {//Boton abrir (Menu)
    height: 50,
    width: 80,
    marginTop: 40,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },

  btnCloseContainer:{
    marginTop: 10
  },
  btnClose:{
    alignSelf: "flex-end",
    width: 30,
    height: 30,
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  avatarContainer:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer:{
    flex: 5,
    textAlign: "center",
  },
  text:{
    marginBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "white"
  }

})