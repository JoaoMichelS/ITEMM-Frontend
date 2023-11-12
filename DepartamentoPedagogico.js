import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';


function DepartamentoPedagogico ({ navigation }) {

 
    return (
        <View style={styles.Container}>
            <Header2 />
                <Text style={styles.Title}>Departamento Pedagógico</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
    },

    Title:{
            color: '#2B2D60',
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontSize: 25,
            paddingBottom: '13%',
            paddingTop: '10%'
    }

});


export default DepartamentoPedagogico
