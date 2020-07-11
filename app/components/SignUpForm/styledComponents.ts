// import {StyleSheet} from 'react-native';
import {Picker, Slider} from 'react-native';

import styled from 'styled-components/native';

import RadioForm from 'react-native-simple-radio-button';

import LinearGradient from 'react-native-linear-gradient';

const MainWrapper = styled(LinearGradient)``;
const ColorSelection = styled.View`
  flex: 1;
  flex-direction: row;
  color: white;
  margin: 20px;
`;
const ColorInput = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100px;
  width: 150px;
`;
const ColorDescription = styled.Text`
  color: white;
  font-size: 15px;
`;

const MainHeading = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
`;

const NameField = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  margin: 10px;
  background: whitesmoke;
`;
const ColorSectionAndForm = styled.View``;
const ColorSection = styled.View`
  width: 100px;
  height: 100px;
  flex-direction: 'row';
`;
const FormSection = styled.View`
  background: white;
  padding: 10px;
  margin: 20px;
`;
const RadioButtonSection = styled(RadioForm)`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 20px;
`;

const SelectBranch = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledPicker = styled(Picker)`
  width: 100px;
  /* background: whitesmoke; */
  color: black;
  border: 2px solid black;
`;

const DOBSection = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const DOBTextInput = styled.TextInput`
  border: 1px solid black;
  padding: 0px 10px;
  margin-left: 20px;
`;

const StyledText = styled.Text`
  color: grey;
`;
const StyledTextHeading = styled.Text`
  font-size: 35px;
  color: black;
`;

const StyledAddressSection = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 20px 0px;
`;

const StyledAddressInput = styled.TextInput`
  border: 1px solid black;
  margin: 0px 0px 0px 5px;
  padding: 2px 5px;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
`;
const TypeSpeedSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
const TypeSpeed = styled(Slider)`
  width: 150px;
  color: gray;
`;

export {
  MainWrapper,
  StyledText,
  ColorInput,
  ColorSelection,
  ColorSection,
  ColorDescription,
  MainHeading,
  NameField,
  StyledTextInput,
  ColorSectionAndForm,
  FormSection,
  RadioButtonSection,
  SelectBranch,
  StyledPicker,
  DOBSection,
  DOBTextInput,
  StyledTextHeading,
  StyledAddressSection,
  StyledAddressInput,
  TypeSpeedSection,
  TypeSpeed,
};

// const styles = StyleSheet.create({
//   MainHeading: {
//     backgroundColor: 'white',
//     color: 'red',
//   },
//   mainHeadingSection: {
//     paddingHorizontal: 5,
//     paddingVertical: 5,
//     marginHorizontal: 5,
//   },
//   mainHeading: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   description: {
//     color: 'gray',
//   },
//   name: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: 'whitesmoke',
//   },
//   commonColor: {
//     color: 'gray',
//   },
//   touchable: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 20,
//     height: 20,
//     backgroundColor: 'white',
//     borderRadius: 14,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginHorizontal: 10,
//   },
//   radio: {
//     width: 12,
//     height: 12,
//     backgroundColor: 'gray',
//     borderRadius: 10,
//   },
//   label: {
//     flexDirection: 'column',
//   },
// });
