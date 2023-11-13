import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header2 from './Header2';

function ChamadosAbertos ({navigation}) {

    const Abertos = () => {
        navigation.navigate('Abertos')
    }


    return (
        <View style={styles.Container}>
        <Header2 />
        <View>
            <Text style={styles.Title}>Meus Chamados</Text>
        </View>    
    </View>
    );
    
};


export default ChamadosAbertos