/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Restaurant from './screens/restaurant'
import {StyleSheet, View} from 'react-native';

const App: () => React$Node = () => {
  return (
     <View style={{ flex: 1 }}>
        <View style={styles.statusBarBackground}/> 
     <Restaurant/>
     </View>
     )
        }
     
        const styles = StyleSheet.create({
         statusBarBackground: {
           height: (Platform.OS === 'ios') ? 40 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
         }
       
       })
export default App;
