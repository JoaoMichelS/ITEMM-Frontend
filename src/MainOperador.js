import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from './HeaderPrincipal';

function MainOperador({ navigation }) {

    const Departamentos = () => { 
        navigation.navigate ('Departamentos') 
    };

    const Relatorios = () => { 
        navigation.navigate ('Relatorio')
    };

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
                <Text style={styles.ChamadosAbertos}>Iniciar chamado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonRelatorio} onPress={Relatorios}>
                <Text style={styles.Relatorios}>Relatórios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonRelatorio} onPress={Departamentos}>
                <Text style={styles.Relatorios}>Departamentos</Text>
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
        marginTop: 30,
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
});

export default MainOperador;