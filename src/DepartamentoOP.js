import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';

function Departamentos({ navigation }) {

    const DepartamentoPedagogico = () => { 
        navigation.navigate ('Pedagogico')
    };

    const DepartamentoSelecao = () => {
        navigation.navigate ('Selecao')
    }; 

    const DepartamentoSocial = () => {
        navigation.navigate ('Social')
    };

    const DepartamentoPessoal = () => {
        navigation.navigate ('Pessoal')
    };

    const DepartamentoComercial = () => {
        navigation.navigate ('Comercial')
    };

    return (
        <View style={styles.Container}>
        <Header2 />
        <View style={styles.Content}>
            <Text style={styles.Text}>Departamentos</Text>
        </View>
        <TouchableOpacity style={styles.ButtonPedago} onPress={DepartamentoPedagogico}>
            <Text style={styles.DepPedagogico}>Pedagógico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonSelecao} onPress={DepartamentoSelecao}>
            <Text style={styles.DepSelecao}>Seleção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonSocial} onPress={DepartamentoSocial}>
            <Text style={styles.DepSocial}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonPessoal} onPress={DepartamentoPessoal}>
            <Text style={styles.DepPessoal}>Pessoal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonComercial} onPress={DepartamentoComercial}>
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

    ButtonPedago: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        padding: 10,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: 20,
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "12%",
    },

    ButtonSelecao: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        padding: 10,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: 20,
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "11%",
    },

    ButtonSocial: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        padding: 10,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: 20,
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "10%",
    },

    ButtonPessoal: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        padding: 10,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: 20,
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "10%",
    },

    ButtonComercial: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        padding: 10,
        paddingRight: 'auto',
        paddingLeft: 'auto', 
        marginBottom: -15,
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "10%",
    },

    DepPedagogico: {
        color: "#FFF",
        fontSize: 30,
    },

    DepSelecao: {
        color: "#FFF",
        fontSize: 30,
    },
    DepSocial: {
        color: "#FFF",
        fontSize: 30,
    },
    DepPessoal: {
        color: "#FFF",
        fontSize: 30,
    },
    DepComercial: {
        color: "#FFF",
        fontSize: 30,
    },

    Text: {
        color: '#2B2D60',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 40,
        paddingBottom: '25%',
    }
    
});

export default Departamentos;