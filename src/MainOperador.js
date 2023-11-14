import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderPrincipal from './HeaderPrincipal';
import { VictoryPie, VictoryTooltip } from 'victory-native';
import { ScrollView } from 'react-native-gesture-handler';

function MainOperador({ navigation }) {

    const DATA = [
        {x: 'Nao Atendidos', y: 90, color: 'tomato',},
        {x: 'Atendidos', y: 70, color: '#90EE90',},
    ];

    const Relatorios = () => { 
        navigation.navigate ('Relatorio')
    };

    const NovoChamado = () => { 
        navigation.navigate ('NovoChamado')
    };

    return (
        <View style={styles.Container}>
            <HeaderPrincipal />
            <View style={styles.Content}>
                <VictoryPie data={DATA} colorScale={DATA.map((value) => value.color)} origin={{ y: 180 }}
                    labelPlacement={({ index }) => index
                        ? "parallel"
                        : "vertical" }
                    labels={({ datum }) => `${datum.x}: ${datum.y}`}
                    labelRadius={40}
                    />
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
        bottom: "6%",
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
        bottom: "8%",
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