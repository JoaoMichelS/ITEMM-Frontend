import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from './HeaderPrincipal';

function MainScreen({ navigation }) {

    const NovoChamado = () => { 
        navigation.navigate ('NovoChamado')
    };

    return (
        <View style={styles.Container}>
            <Header />
            <View style={styles.Content}>
                <Text></Text>
            </View>
            <TouchableOpacity style={styles.ButtonChamado} onPress={NovoChamado}>
                <Text style={styles.IniciarChamado}>Iniciar Chamado</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
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
        padding: 30,
        paddingRight: 50,
        paddingLeft: 50, 
        marginBottom: 50,
        margin: 55,
        height: 85,
        width: 250,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    IniciarChamado: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});

export default MainScreen;