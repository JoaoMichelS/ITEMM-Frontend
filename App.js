import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import NewUserScreen from './NewUserScreen';
import MainScreen from './MainScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
// import DrawerNavigation from './DrawerNavigation';
import NovoChamado from './NovoChamado';
import MainOperador from './MainOperador';
import Perfil from './Perfil';
import Configuracoes from './Configuracoes';

const Stack = createStackNavigator(); 

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Configuracoes">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        {/* <Stack.Screen name="Drawer" component={DrawerNavigation} /> */}
        <Stack.Screen name="NovoChamado" component={NovoChamado} />
        <Stack.Screen name="MainOperador" component={MainOperador} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;