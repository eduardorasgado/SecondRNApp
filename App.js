//importar librerias
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

//clase App
class App extends Component {
  state = {
    texto: "",
  }
  //ES6
  imprimirTexto = (text) => {
    return(
        <Text>
          {this.state.texto}
        </Text>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Open up App.js to start working on your app!</Text>
        <Button title="Presioname"
                onPress={this.imprimirTexto}></Button>
        <TextInput style={styles.inputs}
                   value= {this.state.texto}
                   onChangeText={(texto) => this.setState({texto})}
                   placeholder="Escriba su nombre"></TextInput>
      </View>
    );
  }
}

//esto es el estilo del componente
//Esta escrito en CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  inputs: {
    height: 40,
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 10,
    fontSize: 38,
  }
});

//exporta la vista al celular
export default App;