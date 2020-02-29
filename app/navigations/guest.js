import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../screens/Start';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} options={{
        title: 'Start',
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTitleStyle:{
          textAlign: 'center',
          alignSelf: 'center',
          fontSize: 20,
          color: '#fff',
          fontWeight: 'bold'
        }
      }} />
    </Stack.Navigator>
  );
}