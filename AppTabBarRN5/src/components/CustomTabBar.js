import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';




function CustomTabBar( {state, descriptors, navigation }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {

                //Abaixo criar Nome:
                const options = descriptors[route.key].options;
                
                //Se tiver nome ele usa, se n usa o label:
                let label = route.name;
                if(options.tabBarLabel != undefined) {
                    label = options.tabBarLabel;
                } else if(options.title != undefined) {
                    label = options.title;
                }

                //Em qual tab estou focado: 
                const isFocused = state.index === index;

                const handleTabPress = () => {
                    navigation.navigate ( route.name );
                }

                // configurar uma das tabs diferente das outras:
                if(route.name == 'TabHome') {
                    return (
                        <TouchableHighlight key={index} underlayColor="transparent"  style={styles.middleTab} onPress={handleTabPress}>
                        <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                    </TouchableHighlight>
                    );
                } else {
                    return (
                        <TouchableHighlight key={index} underlayColor="transparent" style={styles.tab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    );
                }
            })}
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#6A5ACD'
    },
    tab:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:50,
    },
    middleTab:{
        width:70,
        height:70,
        backgroundColor:'#00FF00',
        justifyContent:'center',
        alignItems:'center', 
        marginTop: -20,
        borderRadius:35
    },
    label:{
        fontSize:16,
        color:'#FF0000'
    },
    labelFocused:{
        fontSize:16,
        color:'#000'
    }
});

export default CustomTabBar;



//Esse arquivo é de como criar um TabBar. 