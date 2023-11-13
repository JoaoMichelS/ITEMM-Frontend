import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Header2 from './Header2';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Configuracoes ({ navigation }) {

    const [toggle1Enabled, setToggle1Enabled] = useState(false);
    const [toggle2Enabled, setToggle2Enabled] = useState(true);

    const toggleSwitch1 = () => setToggle1Enabled(previousState => !previousState);
    const toggleSwitch2 = () => setToggle2Enabled(previousState => !previousState);

    return (
        <View style={styles.Container}> 
            <Header2 />
            <View>
                <Text style={styles.Title}>Configurações</Text>
            </View>
            <View style={styles.Container2}>
                <Text style={styles.Notificacoes}>Notificações</Text>
                <Switch style={styles.Switch1}
                    trackColor={{false: '#767577', true: '#2B2D60'}}
                    thumbColor={toggle1Enabled ? '#fff' : '#f4f3f4'}
                    onValueChange={toggleSwitch1}
                    value={toggle1Enabled}
                />
            </View>
            <View style={styles.Container3}>
                <Text style={styles.Modo}>Modo Escuro</Text>
                <Switch style={styles.Switch2}
                    trackColor={{false: '#767577', true: '#2B2D60'}}
                    thumbColor={toggle2Enabled ? '#fff' : '#f4f3f4'}
                    onValueChange={toggleSwitch2}
                    value={toggle2Enabled}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
    },

    Title: {
        color: "#2B2D60",
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingTop: 30,
        fontSize: 25,
    },

    Notificacoes: {
        color: "#2B2D60",
        fontSize: 20,
        marginTop: 80,
        marginLeft: 50,
    },

    Modo: {
        color: "#2B2D60",
        fontSize: 20,
        marginTop: 30,
        marginLeft: 50,
    },

    Container2 : {
        flexDirection: 'row',
    },

    Container3 : {
        flexDirection: 'row',
    },

    Switch1: {
        marginTop: 70,
        marginLeft: 80,
        transform: [{scaleX: 1.2}, {scaleY: 1.2}],
    },

    Switch2: {
        marginTop: 20,
        marginLeft: 75,
        transform: [{scaleX: 1.2}, {scaleY: 1.2}],
    }
    
});

export default Configuracoes;