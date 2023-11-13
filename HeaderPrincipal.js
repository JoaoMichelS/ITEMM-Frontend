import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {FIREBASE_AUTH, auth} from "./src/services/firebaseConfig";
import { useNavigation } from '@react-navigation/native';

export default function HeaderPrincipal () {

    const navigation = useNavigation();

    const MenuScreen = () => {
        navigation.navigate('Menu')
      };

    const Notificacoes = () => {
        navigation.navigate('Notificacoes')
      };

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={MenuScreen}> 
                <Entypo style={styles.menu} name="menu" size={30}/>
            </TouchableOpacity> 
            <View>
                <Text style={styles.nome}>Olá, </Text>
                <Text style={styles.data}>7 set. 2023</Text> 
            </View>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={Notificacoes}>
                <Fontisto style={styles.bell} name="bell-alt" size={20}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({

    header : {
        height : 125,
        paddingTop: 15,
        paddingRight: 25,
        paddingBottom: 8,
        paddingLeft: 25,
        backgroundColor: '#96C75A',
        borderBottomColor: '#fff',
        justifyContent : 'space-between',
        display: 'flex',
        flexDirection: 'row'
    },
    
    nome : {
        color: "#FFF",
        fontSize: 24,
        marginTop: 40,
        paddingRight: '65%',
    },

    data : {
        color: "#FFF",
        fontSize: 18,
        marginBottom: 10,
        },
    
    menu : {
        color : "#FFFFFF",
        position: "absolute"
    },

    bell : {
        color: '#FFFFFF',
    },
    
    TouchableOpacity : {
        height: 30
    },
    
});