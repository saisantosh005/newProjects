import React, {Component} from 'react';
import {View, ScrollView, Picker, Button} from 'react-native';
import {
  MainHeading,
  NameField,
  StyledTextInput,
  MainWrapper,
  ColorSectionAndForm,
  FormSection,
  ColorSelection,
  ColorDescription,
  // RadioButtonSection,
  SelectBranch,
  StyledPicker,
  DOBSection,
  DOBTextInput,
  StyledText,
  StyledTextHeading,
  StyledAddressSection,
  StyledAddressInput,
  TypeSpeedSection,
  TypeSpeed,
  ColorInput,
} from './styledComponents';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import {ColorPicker, fromHsv} from 'react-native-color-picker';

@observer
class SignUpForm extends Component {
  @observable gender!: string;
  @observable color_One: any = '#00ace6';
  @observable color_Two: any = '#9933ff';
  // @observable visible!: boolean;
  // renderRadioButton = () => {
  //   return [
  //     {category: 'Male', id: 0},
  //     {category: 'Female', id: 1},
  //     {category: 'others', id: 2},
  //   ].map(item => {
  //     return (
  //       <View style={styles.label} key={item.id}>
  //         <Text>{item.category}</Text>
  //         <TouchableOpacity style={styles.touchable}>
  //           <View style={styles.radio} />
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   });
  // };
  renderSignUpButton = () => {
    return (
      <Button
        color="red"
        title="Sign up"
        onPress={() => {
          console.log(1);
        }}
      />
    );
  };
  renderTypeSpeedSection = () => {
    return (
      <TypeSpeedSection>
        <StyledText>Set your typing speed here</StyledText>
        <TypeSpeed />
      </TypeSpeedSection>
    );
  };
  renderAddressSection = () => {
    return (
      <StyledAddressSection>
        <StyledText>EnterYour address </StyledText>
        <StyledAddressInput
          multiline
          placeholder="Type your address here!"
          numberOfLines={4}
          editable
          textAlignVertical="top"
        />
      </StyledAddressSection>
    );
  };
  renderDOB = () => {
    return (
      <DOBSection>
        <StyledText>DOB</StyledText>
        <DOBTextInput placeholder={'dd/mm/yyyy'} />
      </DOBSection>
    );
  };

  renderBranchSelection = () => {
    return (
      <SelectBranch>
        <StyledText>Select your branch</StyledText>
        <StyledPicker>
          <Picker.Item label="CSE" value="CSE" />
          <Picker.Item label="EEE" value="CSE" />
          <Picker.Item label="Mech" value="CSE" />
          <Picker.Item label="IT" value="CSE" />
          <Picker.Item label="Chemical" value="CSE" />
          <Picker.Item label="ECE" value="CSE" />
        </StyledPicker>
      </SelectBranch>
    );
  };
  // renderRadioButton = () => {
  //   const radio_props = [
  //     {label: 'Male', value: 0},
  //     {label: 'Female', value: 1},
  //     {label: 'Other', value: 3},
  //   ];
  //   return (
  //     <RadioButtonSection
  //       initial={0}
  //       onPress={(value: string) => (this.gender = value)}
  //       radio_props={radio_props}
  //       formHorizontal={false}
  //       labelHorizontal={true}
  //       buttonColor={'#50C900'}
  //       animation={true}
  //       buttonInnerColor={'gray'}
  //       buttonSize={10}
  //     />
  //   );
  // };

  renderMail = () => {
    return (
      <StyledTextInput
        keyboardType={'email-address'}
        autoCompleteType={'email'}
        placeholder="Email"
      />
    );
  };
  renderConfirmPassword = () => {
    return (
      <StyledTextInput placeholder="Confirm Password" secureTextEntry={true} />
    );
  };
  renderPassword = () => {
    return <StyledTextInput secureTextEntry={true} placeholder="Password" />;
  };
  renderMobileNumber = () => {
    return (
      <StyledTextInput
        autoCompleteType={'tel'}
        keyboardType={'number-pad'}
        placeholder="Mobile Number"
      />
    );
  };

  renderNameField = () => {
    return (
      <NameField>
        <StyledTextInput placeholder="First Name" />
        <StyledTextInput placeholder="Last Name" />
      </NameField>
    );
  };
  renderMainHeadingSection = () => {
    return (
      <MainHeading>
        <StyledTextHeading>SignUp</StyledTextHeading>
        <StyledText>please fill in the form to create an account!</StyledText>
      </MainHeading>
    );
  };
  @action.bound
  renderFormSection() {
    return (
      <FormSection>
        {this.renderMainHeadingSection()}
        {this.renderNameField()}
        {this.renderMail()}
        {this.renderMobileNumber()}
        {this.renderPassword()}
        {this.renderConfirmPassword()}
        {this.renderGenderSelectSection()}
        {this.renderBranchSelection()}
        {this.renderDOB()}
        {this.renderAddressSection()}
        {this.renderTypeSpeedSection()}
        {this.renderSignUpButton()}
      </FormSection>
    );
  }
  @action.bound
  changeColorOne(color: any) {
    this.color_One = fromHsv(color);
  }
  @action.bound
  changeColorTwo(color: any) {
    this.color_Two = fromHsv(color);
  }
  renderColorSection = () => {
    return (
      <ColorSelection>
        <ColorDescription> Select your favorite colors</ColorDescription>
        <ColorInput>
          <ColorPicker
            defaultColor="blue"
            onColorChange={(color): void => this.changeColorOne(color)}
          />
          <ColorPicker
            defaultColor="powderblue"
            onColorChange={(color): void => this.changeColorTwo(color)}
          />
        </ColorInput>
      </ColorSelection>
    );
  };
  @action.bound
  renderGenderSelectSection() {
    return (
      <View>
        <StyledText>Select Your Gender</StyledText>
      </View>
    );
    // <View>{this.renderRadioButton()}</View>
  }
  render() {
    return (
      <MainWrapper
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={[this.color_One, this.color_Two]}>
        <ScrollView>
          <ColorSectionAndForm>
            {this.renderColorSection()}
            {this.renderFormSection()}
          </ColorSectionAndForm>
        </ScrollView>
      </MainWrapper>
    );
  }
}

export {SignUpForm};

// import React, {Component} from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import {styles, MainHeading} from './styledComponents';

// class SignUpForm extends Component {
//   renderRadioButton = () => {
//     return [
//       {category: 'Male', id: 0},
//       {category: 'Female', id: 1},
//       {category: 'others', id: 2},
//     ].map(item => {
//       return (
//         <View style={styles.label} key={item.id}>
//           <Text>{item.category}</Text>
//           <TouchableOpacity style={styles.touchable}>
//             <View style={styles.radio} />
//           </TouchableOpacity>
//         </View>
//       );
//     });
//   };

//   render() {
//     return (
//       <View style={styles.MainHeading}>
//         <ScrollView>
//           <MainHeading>
//             <Text style={styles.mainHeading}>SignUp</Text>
//             <Text style={styles.description}>
//               please fill in the form to create an account!
//             </Text>
//           </MainHeading>
//           <TextInput style={styles.name} placeholder="First Name" />
//           <TextInput style={styles.name} placeholder="Last Name" />

//           <TextInput
//             style={styles.name}
//             keyboardType={'email-address'}
//             autoCompleteType={'email'}
//             placeholder="Email"
//           />
//           <TextInput
//             style={styles.name}
//             autoCompleteType={'tel'}
//             keyboardType={'number-pad'}
//             placeholder="Mobile Number"
//           />
//           <TextInput
//             style={styles.name}
//             secureTextEntry={true}
//             placeholder="Password"
//           />
//           <TextInput
//             style={styles.name}
//             placeholder="Confirm Password"
//             secureTextEntry={true}
//           />
//           <Text style={styles.commonColor}>Select Your Gender</Text>
//           <View style={styles.label}>{this.renderRadioButton()}</View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export {SignUpForm};
