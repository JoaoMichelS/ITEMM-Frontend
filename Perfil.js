import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
 
function Perfil ({ navigation }) {

    return ( 
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.Title}>Perfil</Text>
                <TextInput style={styles.inputNome} />
                <TextInput style={styles.inputEmail} />
                <TextInput style={styles.inputSenha} />
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.ButtonEditar} >
                    <Text style={styles.Editar}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonSalvar} >
                    <Text style={styles.Salvar}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
};

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
    },
 
    Title: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: 30,
        fontSize: 30,
        alignSelf: 'center',
    },

    inputNome: {
        width: 300,
        height: 40,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        paddingTop: '10%',
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },

    inputEmail: {
        width: 300,
        height: 40,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        alignSelf: 'center',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },

    inputSenha: {
        width: 300,
        height: 40,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 9,
        paddingLeft: 10,
        alignSelf: 'center',
        padding
    },

    ButtonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    ButtonEditar: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        marginTop: 40,
        marginLeft: '50',
        height: 60,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },

    ButtonSalvar: {
        borderWidth: 2,
        borderColor: '#2B2D60',
        borderRadius: 12,
        height: 60,
        width:130,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginRight: '50',
        alignSelf: 'center',
    },

    Editar: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
    },

    Salvar: {
        color: '#2B2D60',
        fontSize: 20,
        alignSelf: 'center'
    }

});

export default Perfil;