/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import contact, {compareNames} from './contact'
import Row from './Row'
import {
  SafeAreaView,
  StyleSheet,
  SectionList,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import ContactList from './ContactList'


class App extends React.Component{

  state = {
    toggle: true,
    contacts: contact,
  }

  toggleButton = ()  => (
    this.setState({
      toggle: !this.state.toggle,
    })
  )

  sort = () => (
    this.setState(prevState => ({contacts: [...prevState.contacts].sort(compareNames)}))
  )

  render(){

    return (
      <>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button title="Toggle Contact" onPress={this.toggleButton} />
        </View>
        <View style={styles.buttons}>
          <Button title="Sort Contact" onPress={this.sort} />
        </View>
          { this.state.toggle ? 
          ( 
            //Implementation of the FlatList
            <ContactList
              // renderItems={this.renderItems}
              // renderSectionHeader={this.renderSectionHeader}
              contacts={this.state.contacts} 
            />
            ) : (
              <View style={styles.text}>
                <Text> No Contacts to Show Right Now </Text>
              </View>
            )
          } 
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
  buttons:{
    padding: 6,
  },
  text:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
