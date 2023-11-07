import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import NewUserScreen from './NewUserScreen';
import MainScreen from './MainScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import NovoChamado from './NovoChamado';

const Stack = createStackNavigator(); 

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NovoChamado" component={NovoChamado} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;