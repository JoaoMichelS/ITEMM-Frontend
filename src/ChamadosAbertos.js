import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';

function ChamadosAbertos ({navigation}) {

    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.ContainerChamado}></Text>
                <Text style={styles.Title}>Resposta Operador</Text>
                <Text style={styles.ContainerResposta}></Text>
            </View>     
            <View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
    },

    ContainerChamado: {
        width: 300,
        height: 180,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 60,
    },

    Title: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: '23%',
        fontSize: 20,
        alignSelf: 'center',
    },

    ContainerResposta: {
        width: 300,
        height: 200,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 50,
    },
});


export default ChamadosAbertos