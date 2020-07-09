import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    color: 'red',
  },
  name: {
    padding: 10,
    margin: 10,
    backgroundColor: 'whitesmoke',
  },
  commonColor: {
    color: 'gray',
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 14,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  radio: {
    width: 12,
    height: 12,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  label: {
    flexDirection: 'row',
  },
});

export {styles};
