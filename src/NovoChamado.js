import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header2 from './Header2';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

function NovoChamado ({ navigation }) {
    const [departament, setDepartament] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const createCall = async () => {
        try{
            const newCall = {
                subject: subject,
                status: false,
                departament: departament,
                description: description
            }
            axios.post("http://localhost:3000/call", newCall).
            then(function (response){
                console.log(response);
                if (response.status == 200){
                  alert('Chamado criado!');
                  navigation.navigate('Main');
                }
                else{
                  alert('Erro ao criar o chamado');
                }
              }).catch(function (err){
                console.log(err);
                alert('Erro ao criar o chamado');
              });
        } catch {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        }
    }

    return (
        <View style={styles.Container}>
            <Header2 />
            <View>
                <ScrollView>
                <Text style={styles.Title}>Novo Chamado</Text>
                <Text style={styles.Title2}>Departamento</Text>
                <TextInput 
                    style={styles.input1}
                    onChangeText={(text) => setDepartament(text)}
                    value={departament}
                />
                <Text style={styles.Title3}>Assunto</Text>
                <TextInput 
                    style={styles.input2}
                    onChangeText={(text) => setSubject(text)}
                    value={subject}
                />
                <Text style={styles.Title2}>Descrição</Text>
                <TextInput style={styles.input3} 
                    textAlignVertical='top' 
                    returnKeyType='done' 
                    multiline={true}
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                />
                
            <TouchableOpacity style={styles.ButtonCriar} onPress={createCall}>
                <Text style={styles.CriarChamado}>Criar Chamado</Text>
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
        paddingTop: 25,
        fontSize: 25,
    },

    Title2: {

        color: "#2B2D60",
        paddingTop: 45,
        paddingLeft: 25,
        fontSize: 20,

    },

    Title3: {
        color: "#2B2D60",
        paddingTop: 20,
        paddingLeft: 25,
        fontSize: 20,
    },

    ButtonCriar: {
        flex: 1,
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

    CriarChamado: {
        color: '#FFFFFF',
        fontSize: 20,
    },

    input1: {
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
        height: 40,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom:5,
        marginLeft: 25,
    },

    input3: {
        width: 300,
        height: 100,
        borderColor: '#2B2D60',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom:5,
        marginLeft: 25,
    },
});

export default NovoChamado;