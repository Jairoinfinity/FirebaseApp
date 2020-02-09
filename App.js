import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import PreLoader from './app/components/PreLoader';

export default function App() {
  return (
    <PreLoader></PreLoader>
    // <View style={styles.container}>
    //   <AppButton
    //     bgColor="rgba(220, 100, 20, 0.7)"
    //     title="test"
    //     action={() => console.log(1)}
    //     iconName="sign-in"
    //     iconSize={30}
    //     iconColor="#fff"
    //   ></AppButton>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
