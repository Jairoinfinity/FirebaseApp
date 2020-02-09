import React from 'react';
import BackgroundImage from './app/components/BackgroundImage';
import Start from './app/screens/Start';
//import firebaseConfig from './app/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyB0bG0Oou8txOyEDVxychlejG2PvhDhJic",
  authDomain: "fir-app-reactn.firebaseapp.com",
  databaseURL: "https://fir-app-reactn.firebaseio.com",
  projectId: "fir-app-reactn",
  storageBucket: "fir-app-reactn.appspot.com",
  messagingSenderId: "107729213091",
  appId: "1:107729213091:web:1158bb013f5c11f717d116",
  measurementId: "G-P1FS6NJQXS"
});

export default function App() {
  return (
    <BackgroundImage
      source={require('./assets/img/fondo3.png')}
    >
      <Start></Start>
    </BackgroundImage>
  );
}