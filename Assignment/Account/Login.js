import * as React from 'react'
import * as firebase from "firebase"
import { Button, StyleSheet, Image, Text, TextInput, View ,Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage:null
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Welcome'))
      .catch(error => this.setState({ errorMessage:alert("wrong email or password") }))
  }

  render() {
    return (
      <View style={styles.MainContainer} >
        <Text style={{ marginTop: -50, fontSize: 20, color: "black", fontWeight: "bold" }}>USER LOGIN</Text>

        <View style={{ flex: 0.5, justifyContent: "center", alignItems: 'center', marginTop: 40 }}>

     

          <Text style={{ marginTop: 15 }}>EMAIL: </Text>
          <TextInput
            // onChangeText={data => this.setState({ TextInput_Name: data })}
            style={styles.textInputStyle}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            underlineColorAndroid='transparent'
          />
          <Text style={{ marginTop: 5 }}>PASSWORD: </Text>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}

            // onChangeText={data => this.setState({ TextInput_Number: data })}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
          />



          <View flexDirection='row' style={{ flex: 0.5, marginTop: 40 }}>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Page')
              }
              onPress={this.handleLogin}
              activeOpacity={0.7} style={styles.button} >

              <Text style={styles.buttonText}> LOGIN </Text>

            </TouchableOpacity>

            <TouchableOpacity

              onPress={() =>
                this.props.navigation.navigate('Signup')
              }
              activeOpacity={0.7} style={styles.button} >

              <Text style={styles.buttonText1}>CREATE ACCOUNT</Text>

            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  }

}



const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#69c2bb',
    padding: 11

  },

  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  text: {

    color: '#fff'
  },
  textInputStyle: {

    height: 30,
    width: 240,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: '#69c2bb',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 15,

  },
  buttonText1: {
    color: '#69c2bb',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 10,
    padding: 4

  },
  textStyle: {

    color: '#BE1D2D',
    textAlign: 'center',
    fontSize: 20

  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    width: 140,
    marginTop: 12,
    marginHorizontal: 10

  },
})
