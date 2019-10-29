import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';


export default class ViewUsers extends React.Component {
    render() {
      return (
        <View Style={styles.container}>
          <Text style={{fontSize:20}}>a </Text>
          <Text style={{fontSize:20}}>b </Text>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#708090',
      alignItems: 'center',
      justifyContent: 'center',
    }})