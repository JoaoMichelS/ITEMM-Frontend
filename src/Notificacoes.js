import React from 'react'; 
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

function Notificacoes ({ navigation }) {

    return (
        <View>
            <Text style={styles.Title}>Notificações</Text>
            <Text style={styles.Data}>Esta semana</Text>
            <Text style={styles.Notificacao}>Seu chamado ' ' recebeu uma resposta</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    Title: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: 30,
        fontSize: 25,
        alignSelf: 'center',
    },

    Data: {
        paddingTop: 40,
        paddingLeft: 20,
        fontSize: 20,
        color: "#808080",
    },

    Notificacao : {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 20,
        color: "#2B2D60",
    }
});

export default Notificacoes;