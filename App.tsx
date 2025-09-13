import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#8B4513" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen 
            name="Landing" 
            component={LandingScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'LeaderSetup Dashboard',
              headerStyle: { backgroundColor: '#8B4513' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontWeight: 'bold' }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
