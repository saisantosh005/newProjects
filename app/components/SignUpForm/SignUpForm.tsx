import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {styles} from './styledComponents';

class SignUpForm extends Component {
  renderRadioButton = () => {
    return ['Male', 'Female', 'others'].map(item => {
      return (
        <View style={styles.label}>
          <Text>{item}</Text>
          <TouchableOpacity style={styles.touchable}>
            <View style={styles.radio} />
          </TouchableOpacity>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput style={styles.name} placeholder="First Name" />
        <TextInput
          style={styles.name}
          keyboardType={'email-address'}
          autoCompleteType={'email'}
          placeholder="Email"
        />
        <TextInput
          style={styles.name}
          autoCompleteType={'tel'}
          keyboardType={'number-pad'}
          placeholder="Mobile Number"
        />
        <TextInput style={styles.name} placeholder="Password" />
        <TextInput style={styles.name} placeholder="Last Name" />
        <TextInput style={styles.name} placeholder="Confirm Password" />
        <Text style={styles.commonColor}>Select Your Gender</Text>
        <View style={styles.label}>{this.renderRadioButton()}</View>
      </View>
    );
  }
}

export {SignUpForm};
