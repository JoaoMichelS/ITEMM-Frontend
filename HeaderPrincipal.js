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
            <Text style={styles.nome}>Olá, Gabriel</Text>
            <Text style={styles.data}>7 set. 2023</Text> 
            <TouchableOpacity>
                <Fontisto style={styles.bell} name="bell-alt" size={20}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({

    header : {
        height : 125,
        paddingTop: 10,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 8,
        backgroundColor: '#96C75A',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        borderRadius: 6.5,
        justifyContent: 'center',
        },
    
        
    nome : {
        fontSize: 24,
        marginRight: 10,
        alignSelf: "flex-start",
        top: 10,
        
        
    },

    data : {
        fontSize: 18,
        alignSelf: "flex-start",
        marginRight: 10,
        top: 10,
        },
    
    menu : {
        size : "auto", 
        color : "#FFFFFF",
        position : "relative",
        right : 18,
        top: 5,
    },

    bell : {
        color:'#FFFFFF',
        alignItems : "center",
        textAlign : "right",
        position : "relative",
        bottom : 76,
    }
});