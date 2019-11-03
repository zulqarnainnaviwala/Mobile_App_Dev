import React from 'react';
import { Button ,View ,StyleSheet, Text} from 'react-native';

export default class Welcome extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={{fontSize:50}}>Welcome</Text>
          <Button
            title="Users"
            onPress={() =>
              this.props.navigation.navigate('ViewUsers')
            }
          />
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
    }
  })