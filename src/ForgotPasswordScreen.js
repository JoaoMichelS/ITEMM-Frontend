import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
 
    const ForgotPassword = () => {
      axios.post(`http://localhost:3000/user/login`, {email: email, password: oldPassword}).
      then(function (response){
        if (response.status == 200){
          const id = response.data.id;
          var newUser = response.data;
          delete newUser.id;
          newUser.password = newPassword;
          axios.post(`http://localhost:3000/user/${id}`, newUser).
          then(function (response_){
            if (response_.status == 200){navigation.navigate('Login');}
            else {alert('Erro ao atualizar usuário');};
          }).catch(function (err){
            alert('Erro ao atualizar usuário');
          });
        }
        else {alert('Erro ao atualizar usuário');}
      }).catch(function (err){
        console.log(err);
        alert('Erro ao atualizar Axios');
      });
      }

    return (
        <View style={styles.container}>
            <Text style={styles.ForgotPassword}>Recuperar senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#FFFFFF"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={"#FFFFFF"}
                secureTextEntry
                onChangeText={(text) => setOldPassword(text)}
                value={oldPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Nova Senha"
                placeholderTextColor={"#FFFFFF"}
                secureTextEntry
                onChangeText={(text) => setNewPassword(text)}
                value={newPassword}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={ForgotPassword}>
                  <Text style={styles.textB}>Atualizar</Text>
              </TouchableOpacity>
            </View>
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
  textB: {
    color: '#FFFFFF',
  },
  text: {
    color: '#2B2D60',
    textAlign: 'left'
  },
  ForgotPassword: {
    color: '#2B2D60',
    textDecorationLine: 'underline',
    fontSize: 40,
    paddingBottom: 85,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2B2D60",
    borderWidth: 2, 
    borderColor: '#2B2D60', 
    borderRadius: 12, 
    padding: 10, 
    marginTop: 55,
    margin: 5,
    height: 45,
  },
});

export default ForgotPasswordScreen;
