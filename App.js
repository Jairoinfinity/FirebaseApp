import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import PreLoader from './app/components/PreLoader';
import BackgroundImage from './app/components/BackgroundImage';

export default function App() {
  return (
    <BackgroundImage
      source={require('./assets/img/fondo3.png')}
    ></BackgroundImage>
  );
}