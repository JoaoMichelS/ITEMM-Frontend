import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import NewUserScreen from './src/NewUserScreen';
import MainScreen from './src/MainScreen';
import ForgotPasswordScreen from './src/ForgotPasswordScreen';
import NovoChamado from './src/NovoChamado';
import MainOperador from './src/MainOperador';
import DepartamentoOP from './src/DepartamentoOP';
import Perfil from './src/Perfil';
import Configuracoes from './src/Configuracoes';
import ResponderChamado from './src/ResponderChamado';
import DepartamentoPedagogico from './src/DepartamentoPedagogico';
import Notificacoes from './src/Notificacoes';
import MenuScreen from './src/MenuScreen';
import MeusChamados from './src/MeusChamados';
import DepartamentoComercial from './src/DepartamentoComercial';
import DepartamentoPessoal from './src/DepartamentoPessoal';
import DepartamentoSocial from './src/DepartamentoSocial';
import DepartamentoSelecao from './src/DepartamentoSelecao';
import ChamadosAbertos from './src/ChamadosAbertos';


const Stack = createStackNavigator(); 

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewUser">
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
        <Stack.Screen name="Pedagogico" component={DepartamentoPedagogico} /> 
        <Stack.Screen name="Comercial" component={DepartamentoComercial} /> 
        <Stack.Screen name="Pessoal" component={DepartamentoPessoal} />
        <Stack.Screen name="Social" component={DepartamentoSocial} />
        <Stack.Screen name="Selecao" component={DepartamentoSelecao} /> 
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="MeusChamados" component={MeusChamados} />
        <Stack.Screen name="ChamadosAbertos" component={ChamadosAbertos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;