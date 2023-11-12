import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function Chamados ({ navigation }) {

    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.Title}>Meus Chamados</Text>
            </View>    
            <View>
                <ScrollView>
                    <TouchableOpacity style={styles.ContainerChamado}>
                        <Text style={styles.Departamento}>Departamento Pessoal</Text>
                        <Text style={styles.Assunto}>Duvidas com o cadatro</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        fontSize: 25,
    },

    ContainerChamado: {
        marginTop: 40,
        backgroundColor: '#FDF6BA',
        paddingTop: 15,
        paddingBottom: 20,
        borderColor: '#FDF6BA', 
        borderRadius: 12,
        width: 380,
        alignSelf: 'center',
    },

    Departamento: {
        color: "#000000",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    Assunto: {
        color: "#000000",
        fontSize: 17,
        marginTop: 10,
        marginLeft: 10,
    },

});

export default Chamados;