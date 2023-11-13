import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Header ({ navigation }) { 

    const MenuScreen = () => {
        navigation.navigate('MenuScreen')
      };

      const Notificacoes = () => {
        navigation.navigate('Notificacoes')
      };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={MenuScreen}>
                <Entypo name="menu" size={30} color="#FFFFFF"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={Notificacoes}>
                <Fontisto name="bell-alt" size={20} color='#FFFFFF'/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    header : {
        height : 65,
        paddingTop: 10,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 8,
        backgroundColor: '#96C75A',
        alignItems: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
