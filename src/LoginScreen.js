import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
      try{
        const user = {
          password: password,
        };

        axios({
          method: "get",
          url: "http://localhost:3000/user",
          data: user
        }).
        then(function (response){
          console.log(response);

        }).catch(function (err){
          console.log(err);
        });
        alert('logou!');
        navigation.navigate('Main');
      } catch (error) {
        console.log(error);
        alert('Sign in failed: ' + error.message);
      }
    }

    const ForgotPassword = () => {
      navigation.navigate('ForgotPassword')
    };

    const NewUser = () => {
      navigation.navigate('NewUser')
    }

    return (
      <View style={styles.container}>
        <Image
        source={require('./assets/Logo.jpg')}
        style={styles.Image}
        />
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
            onChangeText={(text) => setPassword(text)}
            value={password}
        />
        <TouchableOpacity style={styles.ForgotPassword} onPress={ForgotPassword}>
            <Text style={styles.ForgotPassword}>Recuperar senha</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={styles.text}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNewUser} onPress={NewUser}>
              <Text>Cadastre-se</Text>
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
  buttonContainer: {
    flexDirection: 'row',
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonNewUser: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2, 
    borderColor: '#2B2D60', 
    borderRadius: 12, 
    padding: 10, 
    marginTop: 35,
    color: '#2B2D60',
    margin: 5,
    height: 45,
  },
});

export default LoginScreen;
