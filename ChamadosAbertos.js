import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function ChamadosAbertos ({navigation}) {

    const Abertos = () => {
        navigation.navigate('Abertos')
    }


    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.Title}>Chamados Abertos</Text>
                <Text style={styles.Title2}>Resposta Operador</Text>
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

    Title: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: 30,
        fontSize: 15,
    },

    Title2: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: '30%',
        fontSize: 15,
    },
});


export default ChamadosAbertos