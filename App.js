/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import contact from './contact'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

class App extends React.Component{

  state = {
    toggle: false,
  }

  toggleButton = ()  => {
    console.log(this.state.toggle)
    this.setState(prevState => ({toggle: !prevState.toggle,}));
  }
  render(){
    return (
      <>
      <View style={styles.container}>
        <Button style={styles.button} title="Toggle Contact" onPress={() => this.toggleButton} />
        <ScrollView>
          {contact.map(contact => (
            <View>
              <Text key={contact.key}>{contact.name}</Text>
              <Text>{contact.phone}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button:{
    width: 2,
  },
});
export default App;
