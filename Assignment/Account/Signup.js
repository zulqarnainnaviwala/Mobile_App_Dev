import * as React from 'react';
import * as firebase from "firebase"
import fire from '..//Action/Action'
import { Button, StyleSheet, Image, Text, TextInput, View, Alert } from 'react-native';
// import Constants from "expo-constants"
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants"
var database = firebase.database();



export default class Signup extends React.Component {

    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        image: null,
        errorMessage: null
    };
    

    //  writeUserData = (firstname, lastname, image) =>{
    //     firebase.database().ref('users/').set({
    //       firstname: firstname,
    //       lastname: lastname,
    //       profile_picture : image
    //     });
    //   }


    handleSignUp = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.props.navigation.navigate('Welcome'))
            .catch(error => this.setState({ errorMessage: alert('email badly formatted') }));
    }


    // firstname = () => {
    //     // var firstname = document.getElementById('firstname').value;
    //     fire.firestore().collection("firstname").add({
    //         todo, // todo: todo
    //         uid: localStorage.getItem('uid')
    //     })
    //         .then(function (docRef) {
    //             console.log("Document written with ID: ", docRef.id);
    //         })
    //     document.getElementById('firstname').value = '';
    // }


    render() {
        let { image } = this.state;

        return (
            <View style={styles.MainContainer} >
                <Text style={{ marginTop: 5, fontSize: 18, fontWeight: "bold", marginTop: 80 }}>CREATE A NEW ACCOUNT</Text>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>

                    {this.state.errorMessage &&
                        <Text style={{ color: '#800000', alignContent: 'center', fontSize: 14, textAlign: 'center' }}>
                            {this.state.errorMessage}
                        </Text>}
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: 40,
                        }}
                        onPress={() =>
                            Alert.alert("Select Profile Picture", null, [{
                                text: 'Gallery', onPress: () => {
                                    this._pickImage
                                }
                            },
                            {
                                text: 'Camera', onPress: () => {
                                    this.props.navigation.navigate('CameraView')

                                }
                            },
                            ])
                        }
                    >
                        {image &&
                            <Image source={{ uri: image }}
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'rgba(0,0,0,0.2)',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 80,
                                    height: 80,
                                    backgroundColor: '#fff',
                                    borderRadius: 40,
                                }}
                            />}
                    </TouchableOpacity>

                    <View >
                        <View flexDirection='row'>
                            <Button
                                title="Gallery"
                                style={styles.button}
                                onPress={this._pickImage}
                            />
                            <Button
                                title="Camera"
                                style={styles.button}
                                onPress={() =>
                                    this.props.navigation.navigate('CameraView')
                                }

                            />
                        </View>
                        <View flexDirection='column'>
                            <Text>
                                Select Profile Picture
                    </Text>
                        </View>

                    </View>

                    <TextInput
                        // secureTextEntry
                        placeholderTextColor="black"
                        placeholder="First Name"
                        id='firstname'
                        value={this.state.firstname}
                        onChangeText={firstname => this.setState({ firstname })}
                        autoCapitalize="none"
                        style={styles.textInputStyle}

                    />
                    <TextInput
                        // secureTextEntry
                        placeholderTextColor="black"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChangeText={lastname => this.setState({ lastname })}
                        autoCapitalize="none"
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
                            // onPress={this.writeUserData}
                            // onPress={this.firstname}

                            activeOpacity={0.7} style={styles.button} >

                            <Text style={styles.buttonText}>SIGNUP</Text>

                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }


    componentDidMount() {
        this.getPermissionAsync();
    }


    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
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
        fontWeight: "bold",
        fontSize: 10,
    },
    textStyle: {

        color: '#000',
        textAlign: 'center',
        fontSize: 20

    }
});
