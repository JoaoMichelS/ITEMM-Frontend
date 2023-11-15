import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import axios from 'axios';

function NewUserScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [VerPassword, setVerPassword] = useState('');

  const signUp = async () => {
    if (password != VerPassword) {
      alert("Senhas diferentes");
      return ;
    }

    try{
      const newUser = {
        name: username,
        email: email,
        password: password,
        operator: false,
      };
      axios.post("http://localhost:3000/user", newUser).
      then(function (response){
        if (response.status == 200){
          alert("Usuário cadastrado")
          navigation.navigate('Login');
        }
        else if (response.status == 409){
          alert('Usuário já existe');
        }
      }).catch(function (err){
        alert('Erro ao criar usuário ou já existente');
      });
    } catch (error) {
      console.log(error);
      alert('Erro ao criar usuário: ' + error.message);
    }
  }

  return (
      <View style={styles.container}>
          <Image
          source={require('./assets/Logo.jpg')}
          style={styles.Image}
          />
          <TextInput
              style={styles.input}
              placeholder="Usuário"
              placeholderTextColor={"#FFFFFF"}
              onChangeText={(text) => setUsername(text)}
              value={username}
          />
          <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={"#FFFFFF"}
              onChangeText={(text) => setEmail(text)}
              value={email}
          />
          <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
          />
          <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
              onChangeText={(text) => setVerPassword(text)}
              value={VerPassword}
          />
            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={styles.text}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF'
  },
  Image: {
    width:200,
    height:200,
    marginBottom:30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#96C75A',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    backgroundColor: '#96C75A'
  },
  button: {
    backgroundColor: "#2B2D60",
    borderWidth: 2, 
    borderColor: '#2B2D60', 
    borderRadius: 12, 
    padding: 10, 
    marginTop: 35,
    margin: 5,
    height: 45,
  },
  text: {
    color: "#FFFFFF"
  },
  ForgotPassword: {
    color: "#2B2D60",
    textDecorationLine: 'underline',
  },
});

export default NewUserScreen;
