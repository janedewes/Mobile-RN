import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



function AboutScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    const name = route.params?.name;

    const handleBackButton = () => {
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <Text>Tela de Sobre: {name}</Text>

            <Button title="Voltar" onPress={handleBackButton} />
        </View>
    );
}


//Estilização:
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1E90FF'
    }
});

export default AboutScreen;

