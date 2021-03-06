import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';


export default class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={{
                flex: 1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }} onPress={
                async () => {
                  if (this.camera) {
                    let photo = await this.camera.takePictureAsync();
                    console.log(photo)
                  }
                }
              }>
                <Image
                  style={{ width: 60, height: 60, marginVertical: 20 }}
                  source={require('../assets/Camera.png')}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}