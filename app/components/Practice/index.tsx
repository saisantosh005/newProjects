/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
const styles = StyleSheet.create({
  all: {
    backgroundColor: 'yellow',
    color: 'blue',
  },
});

class Practice extends Component {
  renderChange = () => {
    return 1;
  };
  render() {
    return (
      <View style={styles.all}>
        <Text>Hello</Text>
        <View
          accessibilityLabel="akjdflj"
          accessible={false}
          accessibilityRole="radio">
          <Text style={styles.all}>kljd</Text>
          <Text style={{backgroundColor: 'lightblue'}}>
            /**view Nested Text
          </Text>
          <View>
            <Text>one</Text>
            <Text>Two</Text>
            <Text>Three</Text>
          </View>
          <Text style={{backgroundColor: 'lightblue'}}>
            /**Text Nested Text
          </Text>
          <Text>
            <Text>one</Text>
            <Text>Two</Text>
            <Text>Three</Text>
          </Text>

          <Text>Image Examples starts Here</Text>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../../tree-736885__340.webp')}
          />

          <Image
            style={{width: 100, height: 100}}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
          <Button color="green" disabled title="SignUp" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

export {Practice};
//for Text

/**
 *
          accessibilityHint={}
        accessibilityLabel={}
        accessibilityRole={}
        accessibilityState={}
        accessibile={}
        adjustsFontSizeToFit={}
        allowFontScaling={}
        dataDetectorType={}
        disabled={}
        ellipsizeMode={}
        maxFontSizeMultiplier={}
        minumumFontScale={}
        nativeID={}
        numberOfLines={}
        onLayout={}
        onLongPress={}
        onMoveShouldSetResponder={}
        onPress={}
        onResponderGrant={}
        onResponderRelease={}
        onResponderCapture={}
        onResponderTerminate={}
        onResponderTerminateRequest={}
        onStartShouldSetResponderCapture={}
        onTextLayout={}
        pressRetentionoffset={}
        selectable={}
        selectionColor={}
        style={}
        suppressHighlighting={}
        testID={}
        textBreakStrategy={}
        PressRetentionOffset={}


 *
 */

// accessible={Boolean}
// accessibilityLabel={}
// accessibilitiyHint={}
// accessibilityRole={}
// accessibilityState={}
// accessibilityValue={}
// accessibilityActions={}
// onAccessibilityAction={}
// onAccessibilityTap={}
// onMagicTap={}
// onAccesibilityEscape={}
// accessibilityViewModal={}
// accessibilityElementHidden={}
// accessibilityIgnoresInvertColors={}
// accessibilityLiveRegion={}
// importantForAccessibility={}
// hitSlop={}
// nativeId={}
// onLayout={}
// onMoveShouldSetResponder={}
// onMoveShouldSetResponderCapture={}
// onResponderGrant={}
// onResponderMove={}
// onResponderReject={}
// onResponderRelease={}
// onResponderTerminate={}
// onResponderTerminationRequest={}
// onStarttShouldSetResponderCapture={}
// pointerEvents={}
// removeClippedSubviews={}
// testID={}
// collapsable={}
// needOffscreenAlphaCompositing={}
// renderToHarderWareTextureAndroid={}
// ShouldRasterizeIOS={}
// nextFocusRight={}
// nextFocusForward={}
// nextFocusDown={}
// nextFocusLeft={}
// nextFocusUp={}
// focusable={}
