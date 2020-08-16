import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


function TabConfigScreen() {

    return (
        <View style={styles.container}>
            <Text>TAB CONFIG</Text>
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

export default TabConfigScreen;