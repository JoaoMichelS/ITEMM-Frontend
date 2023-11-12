import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';

function ResponderChamado ({ navigation }) {

    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.Title}>Responder Chamado</Text>
                <Text style={styles.Title2}>Departamento</Text>
                <TextInput style={styles.input}>
                </TextInput>
                <Text style={styles.Title2}>Comentário</Text>
                <TextInput style={styles.input2} 
                    value={Text}
                    textAlignVertical='top' 
                    returnKeyType='done' 
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.ButtonCriar} >
                <Text style={styles.EnviarResposta}>Enviar Resposta</Text>
            </TouchableOpacity>
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
        paddingTop: 25,
        fontSize: 25,
    },

    Title2: {
        color: "#2B2D60",
        paddingTop: 45,
        paddingLeft: 25,
        fontSize: 20,
    },

    ButtonCriar: {
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

    input: {
        width: 300,
        height: 40,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 5,
        marginLeft: 25,
    },

    input2: {
        width: 300,
        height: 150,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom:5,
        marginLeft: 25,
    },

    Title: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
    }

});

export default ResponderChamado;