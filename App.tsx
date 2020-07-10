/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Practice} from './app/components/Practice';
import {SignUpForm} from './app/components/SignUpForm';

// import NavigationRouter from './app/navigation/NavigationRouter';

const App = () => {
  return (
    <View style={[styles.normal, styles.ok]}>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  normal: {
    flex: 1,
  },
  ok: {
    backgroundColor: 'lightblue',
  },
  text: {
    backgroundColor: 'white',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderColor: 'black',
    color: 'black',
  },
});

export default App;

// {/* <Practice /> */}
// {/* <TextInput style={[styles.text]}>HOdf</TextInput> */}

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Fragment} from 'react';
// import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

// import NavigationRouter from './app/navigation/NavigationRouter';

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.body}>
//         <NavigationRouter />
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//   },
// });

// export default App;
