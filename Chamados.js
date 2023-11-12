import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function Chamados ({ navigation }) {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         chamado: [
    //             {departamento: 'Departamento Pessoal'},
    //             {departamento: 'Social'},
    //             {departamento: 'Pedagogico'},
    //         ]
    //     }
    // }

    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.Title}>Meus Chamados</Text>
            </View>    
            <View>
                <ScrollView>
                    <FlatList>

                    </FlatList>
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

});

export default Chamados;