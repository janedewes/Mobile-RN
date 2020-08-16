import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


function TabAbouteScreen() {

    return (
        <View style={styles.container}>
            <Text>TAB ABOUT</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TabAbouteScreen;