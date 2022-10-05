import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
