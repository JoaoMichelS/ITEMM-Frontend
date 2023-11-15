import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

function MeusChamados ({ route, navigation }) {
    const [userCalls, setUserCalls] = useState([]);
    
    useEffect( () => {
        async function getCalls() {
            await axios.get(`http://localhost:3000/calls/${route.params.id}`)
            .then(function (response) {
                if (response.status == 200){
                    setUserCalls(response.data);
                }
            })
            .catch(function (err){
                console.log("Error")
            })
        }
        getCalls()
    }, []);

    const ChamadosAbertos = () => {
        navigation.navigate('ChamadosAbertos', route.params)
    };

    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <Text style={styles.Title}>Meus Chamados</Text>
            </View>     
            <View>
                <ScrollView>            
                    {userCalls?.map((call, i) => {
                        <TouchableOpacity key={i} style={styles.ContainerChamado} onPress={ChamadosAbertos}>
                            <Text style={styles.Departamento}>{call.departament}</Text>
                            <Text style={styles.Assunto}>{call.description}</Text>
                            <Text style={styles.Data}>12/11/2023</Text>
                        </TouchableOpacity>    
                    })}
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

    Data: {
        fontSize: 12,
        textAlign: 'right',
        marginRight: '5%',
        bottom : 76,
        padding: -50,
        paddingTop: '5%',
    }
});

export default MeusChamados;