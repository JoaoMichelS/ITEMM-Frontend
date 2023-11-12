import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import NewUserScreen from './NewUserScreen';
import MainScreen from './MainScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import NovoChamado from './NovoChamado';
import MainOperador from './MainOperador';
import DepartamentoOP from './DepartamentoOP';
import Perfil from './Perfil';
import Configuracoes from './Configuracoes';
import ResponderChamado from './ResponderChamado';
import Notificacoes from './Notificacoes';
import Header from './HeaderPrincipal';

const Stack = createStackNavigator(); 

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainOperador">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewUser" component={NewUserScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="NovoChamado" component={NovoChamado} />
        <Stack.Screen name="MainOperador" component={MainOperador} />
        <Stack.Screen name="Departamentos" component={DepartamentoOP} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="ResponderChamado" component={ResponderChamado} />
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
        <Stack.Screen name="HeaderPrincipal" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;