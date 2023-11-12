import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Perfil from './Perfil';
import Chamados from './Chamados';
import Configuracoes from './Configuracoes';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

function MenuScreen ({ navigation }) {

    return (
        <View>
            <Text style={styles.Title}>Menu</Text>
            <View style={styles.ContainerPerfil}>
                <TouchableOpacity style={styles.IconePerfil}>
                    <FontAwesome5 name="user-circle" size={30}/>
                    <Text style={styles.Perfil}>Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ContainerChamados}>
                <TouchableOpacity style={styles.IconeChamados}>
                    <Entypo name="folder" size={30}/>
                    <Text style={styles.Chamados}>Meus Chamados</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ContainerConfiguracoes}>
                <TouchableOpacity style={styles.IconeConfiguracoes}>
                    <MaterialIcons name="settings" size={33}/>
                    <Text style={styles.Configuracoes}>Configurações</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ContainerSair}>
                <TouchableOpacity style={styles.IconeSair}>
                    <SimpleLineIcons name="logout" size={28}/>
                    <Text style={styles.Sair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    Title: {
        color: '#2B2D60',
        fontSize: 25,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        marginTop: 30,
        
    },

    Perfil: {
        color: '#2B2D60',
        fontSize: 20,
        marginTop: -28,
        paddingLeft: 50,
    },

    Chamados: {
        color: '#2B2D60',
        fontSize: 20,
        marginTop: -28,
        paddingLeft: 50,

    },

    Configuracoes: {
        color: '#2B2D60',
        fontSize: 20,
        marginTop: -28,
        paddingLeft: 50,

    },

    Sair: {
        color: '#2B2D60',
        fontSize: 20,
        marginTop: -28,
        paddingLeft: 50,

    },

    ContainerPerfil: {
        flexDirection: 'row',
    },

    IconePerfil: {
        paddingTop: 53,
        marginLeft: 20,
    },

    ContainerChamados: {

        flexDirection: 'row',
    },

    IconeChamados: {
    
            paddingTop: 30,
            marginLeft: 20,
        
    },

    ContainerConfiguracoes:{
        
        flexDirection: 'row',

    },

    IconeConfiguracoes: {

        paddingTop: 30,
        marginLeft: 20,

    },

    ContainerSair: {

        flexDirection: 'row',

    },

    IconeSair: {

        paddingTop: 30,
        marginLeft: 20,

    },


});

export default MenuScreen;