import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';

function ResponderChamado ({ navigation }) {

    const EnviarResposta = () => {
        navigation.navigate('EnviarResposta')
    };

    return (
        <View style={styles.Container}>
            <Header2 />
            <View> 
                <Text style={styles.Title}>Responder Chamado</Text>
                <Text style={styles.Title2}>Descrição</Text>
                <Text style={styles.ContainerChamado}></Text>
                <Text style={styles.Title3}>Comentário</Text>
                <TextInput style={styles.input} 
                    value={Text}
                    textAlignVertical='top' 
                    returnKeyType='done' 
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.ButtonResposta} onPress={EnviarResposta}>
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
        color: '#2B2D60',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 25,
        paddingBottom: '10%',
        paddingTop: '10%',
        alignContent: 'center',
        alignSelf: 'center',

    },

    Title2: {
        color: "#2B2D60",
        paddingTop: '5%',
        paddingLeft: '14%',
        fontSize: 20,
    },

    Title3: {
        color: "#2B2D60",
        paddingTop: '14%',
        paddingLeft: '14%',
        fontSize: 20,

    },

        ButtonResposta: {
        backgroundColor: '#2B2D60',
        borderWidth: 2, 
        borderColor: '#2B2D60', 
        borderRadius: 12, 
        height: 85,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: "-7%",
    },

    ContainerChamado: {
        width: 300,
        height: 150,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
    },

    input: {
        width: 300,
        height: 150,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
    },

    EnviarResposta: {
        color: "#FFF",
        fontSize: 20,
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        
    },
});

export default ResponderChamado;