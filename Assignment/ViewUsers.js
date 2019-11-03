import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';


export default class ViewUsers extends React.Component {
    render() {
      return (
        <View Style={styles.container}>
          <Text style={{fontSize:20,marginVertical:20,alignSelf:'center'}}>USERS</Text>
          <Text style={{fontSize:20,alignSelf:'auto'}}>Zulqarnain</Text>
          <Text style={{fontSize:20,alignSelf:'auto'}}>Aaqib</Text>
          <Text style={{fontSize:20,alignSelf:'auto'}}>Aleem</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }})