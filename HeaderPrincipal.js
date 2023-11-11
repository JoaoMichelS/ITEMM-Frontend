import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {FIREBASE_AUTH, auth} from "./src/services/firebaseConfig";


export default function Header () {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Entypo style={styles.menu}name="menu" size={30}/>
            </TouchableOpacity> 
            <Text style={styles.nome}>Olá, </Text>
            <Text style={styles.data}>7 set. 2023</Text> 
            <TouchableOpacity>
                <Fontisto style={styles.bell} name="bell-alt" size={20}/>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    header : {
        height : 125,
        paddingTop: 10,
        paddingRight: 25,
        paddingBottom: 8,
        paddingLeft: 25,
        backgroundColor: '#96C75A',
        borderBottomColor: '#fff',
        justifyContent: 'center',
        },
    
        
    nome : {
        color: "#FFF",
        fontSize: 24,
        top: 10,
        left: 30,
        
    },

    data : {
        color: "#FFF",
        fontSize: 18,
        top: 10,
        left: 30,
        },
    
    menu : {
        color : "#FFFFFF",
        left: -5,
        top: 3,
    },

    bell : {
        color: '#FFFFFF',
        textAlign : "right",
        bottom : 76,
        padding: -50,
        spacing: 0,
    },
});