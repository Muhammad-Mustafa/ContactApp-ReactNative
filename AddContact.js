import React from 'react';
import {KeyboardAvoidingView, TextInput, Button, StyleSheet} from 'react-native';
let key = 100;
class AddContact extends React.Component {

    componentDidUpdate(prevProps, prevState){
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone)
        this.formVaild();
    }
    
  state = {
    name: '',
    phone: '',
    disabled: true,
    key: key,
  };

  handleName = (name) => {
    this.setState({name: name});
    // this.formVaild();
  };

  handlePhone = (phone) => {
    if (/^\d+$/.test(phone) || phone == '') {
      this.setState({phone: phone});
      console.log(phone);
    //   this.formVaild();
    }
  };

  formVaild = () =>{
      if(this.state.name.length > 5 && this.state.name.length !== 0 && this.state.phone.length === 11){
          this.setState({
              disabled: false,
          })
      }else{
          this.setState({disabled: true,})
      }
  }

  addContact = () => {
    this.props.onSubmit(this.state);
    this.props.toggleButton();
}

  render() {
    return (
      <KeyboardAvoidingView >
        <TextInput 
          value={this.state.name}
          onChangeText={this.handleName}
          placeholder="Enter your name"
          autoCapitalize="words"
        />
        <TextInput 
          value={this.state.phone}
          onChangeText={this.handlePhone}
          placeholder="Enter your Phone-Number"
          maxLength={11}
          keyboardType="numeric"
        />
        <Button title="Submit" disabled={this.state.disabled}  onPress={this.addContact}/>
      </KeyboardAvoidingView>
    );
  }
}


export default AddContact;
