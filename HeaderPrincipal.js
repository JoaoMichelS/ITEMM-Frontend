import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';



export default function Header () {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Entypo name="menu" size={30} color="#FFFFFF"/>
            </TouchableOpacity> 
            <Text style={styles.nome}>Olá </Text>
            <Text style={styles.data}>7 set. 2023</Text> 
            <TouchableOpacity>
                <Fontisto name="bell-alt" size={20} color='#FFFFFF'/>
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
        flexDirection: 'column',
        justifyContent: 'center',
        },
    
        
    nome : {
        fontSize: 24,
        marginRight: 10,
        alignSelf: "flex-start",
        
    },

    data : {
        fontSize: 18,
        alignSelf: "flex-start",
        marginRight: 10,
        
        },

});