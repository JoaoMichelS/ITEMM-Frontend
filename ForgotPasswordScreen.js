import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {FIREBASE_AUTH, auth} from "./src/services/firebaseConfig";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const auth = FIREBASE_AUTH;
 
    const ForgotPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Email de alteração de senha enviado!")
        }).catch((error) => {
            alert("Email não enviado: " + error)
        })
      }

    return (
        <View style={styles.container}>
            <Text style={styles.ForgotPassword}>Recuperar senha</Text>
            <Text style={styles.text}>Digite seu email para envio do link de recuperação:</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#FFFFFF"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={ForgotPassword}>
                  <Text style={styles.textB}>ENTRAR</Text>
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
