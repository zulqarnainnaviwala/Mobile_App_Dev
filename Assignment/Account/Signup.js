import * as React from 'react';
import * as firebase from "firebase"
import fire from '..//Action/Action'
import { Button, StyleSheet, Image, Text, TextInput, View } from 'react-native';
import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Signup extends React.Component {

    state = {
        name:'',
        email: '',
        password: '',
        errorMessage: null
    };

    handleSignUp = () => {
        const {email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.props.navigation.navigate('Welcome'))
            .catch(error => this.setState({ errorMessage: alert('email badly formatted') }));
    }

    

    render() {
        let { image } = this.state;

        return (
            <View style={styles.MainContainer} >
                <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold",marginTop:80 }}>CREATE A NEW ACCOUNT</Text>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>

                    {this.state.errorMessage &&
                        <Text style={{ color: '#800000', alignContent: 'center', fontSize: 14, textAlign: 'center' }}>
                            {this.state.errorMessage}
                        </Text>}
                    <TextInput
                        // secureTextEntry
                        placeholderTextColor="black"
                        placeholder="First Name"
                        autoCapitalize="none"
                        // value={this.state.password}
                        style={styles.textInputStyle}

                    />
                      <TextInput
                        // secureTextEntry
                        placeholderTextColor="black"
                        placeholder="Last Name"
                        autoCapitalize="none"
                        // value={this.state.password}
                        style={styles.textInputStyle}

                    />
                    <TextInput
                        placeholderTextColor="black"
                        placeholder="Email Address"
                        autoCapitalize="none"
                        style={styles.textInputStyle}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput
                        secureTextEntry
                        placeholderTextColor="black"
                        placeholder="Password"
                        autoCapitalize="none"
                        value={this.state.password}
                        style={styles.textInputStyle}
                        onChangeText={password => this.setState({ password })}

                    />
                    <View flexDirection='row'>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('Login')
                            } activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SIGN IN INSTEAD</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.handleSignUp}
                            activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SIGNUP</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
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
        padding: 10,
        width: 140,
        marginTop: 12,
        marginHorizontal: 10

    },

    text: {

        color: '#fff'
    },
    textInputStyle: {

        height: 37,
        width: 250,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginTop: 15
    },
    buttonText: {
        color: '#69c2bb',
        textAlign: 'center',
        fontSize: 11
    },
    textStyle: {

        color: '#000',
        textAlign: 'center',
        fontSize: 20

    }
});




