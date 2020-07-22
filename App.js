/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import contact from './contact'
import Row from './Row'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';


class App extends React.Component{

  state = {
    toggle: true,
  }

  toggleButton = ()  => (
    // console.log(this.state.toggle);
    this.setState({
      toggle: !this.state.toggle,
    })
  )
  // renderItem = obj => <Row {...obj.item}  />
  render(){
    console.log(this.state.toggle)
    return (
      <>
      <View style={styles.container}>
        <Button style={styles.button} title="Toggle Contact" onPress={this.toggleButton} />
          { this.state.toggle && 
          ( 
            //Implementation of the FlatList
            <FlatList 
              renderItem = {obj => <Row {...obj.item}  /> }
              data={contact}
              keyExtractor={contact.key}
            />
            


            //Implementation of the scrollView 
            // <ScrollView>
            //   {contact.map(contact => (
            //     <Row key={contact.key} {...contact} />
            //   ))}
            // </ScrollView>
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
  button:{
    width: 2,
  },
});
export default App;
