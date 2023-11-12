import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';

function Departamentos({ navigation }) {

    const DepPedagogico = () => {
        navigation.navigate (' Pedagogico ')
    };

    const DepSelecao = () => {
        navigation.navigate (' Selecao ')
    };

    const DepSocial = () => {
        navigation.navigate (' Social ')
    };

    const DepPessoal = () => {
        navigation.navigate (' Pessoal ')
    };

    const DepComercial = () => {
        navigation.navigate (' Comercial ')
    };

    return (
        <View style={styles.Container}>
        <Header2 />
        <View style={styles.Content}>
            <Text></Text>
        </View>
        <TouchableOpacity style={styles.ButtonPedago} onPress={DepPedagogico}>
            <Text style={styles.DepPedagogico}>Pedagógico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonSelecao} onPress={DepSelecao}>
            <Text style={styles.DepSelecao}>Seleção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonSocial} onPress={DepSocial}>
            <Text style={styles.DepSocial}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonPessoal} onPress={DepPessoal}>
            <Text style={styles.DepPessoal}>Pessoal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonComercial} onPress={DepComercial}>
            <Text style={styles.DepComercial}>Comercial</Text>
        </TouchableOpacity>
    </View>
    );
    
}

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
        justifyContent: 'center',
        
    },

    Content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ButtonChamado: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        padding: 10,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: 50,
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "15%",
    },

    ButtonRelatorio: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: -20,
        height: 85,
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "10%",
    },


    ChamadosAbertos: {
        color: "#FFF",
        fontSize: 25,
    },

    Relatorios: {
        color: "#FFF",
        fontSize: 20,
    },

    TextoChamado: {
    }
});

export default Departamentos;