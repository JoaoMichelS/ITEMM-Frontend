import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderPrincipal from './HeaderPrincipal';

function MainScreen({ route, navigation }) {
    console.log(route.params);

    const NovoChamado = () => { 
        navigation.navigate('NovoChamado', route.params);
    }; 

    return (
        <View style={styles.Container}>
            <HeaderPrincipal name={route.params.name}/>
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
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        
    },

    IniciarChamado: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});

export default MainScreen;