import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from './MainScreen';
import Perfil from './Perfil';
import Chamados from "./Chamados";
import Configuracoes from './Configuracoes';

export default function DrawerNavigation({ navigation }) {

    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Main" component={MainScreen}/>
                <Drawer.Screen name="Perfil" component={Perfil}/>
                <Drawer.Screen name="Chamados" component={Chamados}/>
                <Drawer.Screen name="Configuracoes" component={Configuracoes}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}