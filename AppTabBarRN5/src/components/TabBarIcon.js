import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function TabBarIcon(props) {

    let srcImage = null;
    let badgeCount = 0;

    switch(props.name) {
        case 'TabAbout':
            srcImage = require('../images/interface.png');
            badgeCount = 0;
        break;
        case 'TabHome':
            srcImage = require('../images/home.png');
            badgeCount = 3;
        break;
        case 'TabConfig':
            srcImage = require('../images/gear.png');
            badgeCount = 1
        break;
    }
        
    //Abaixo criar Badge:
    return (
        <View>
            <Image source={srcImage} style={styles.icon} />
            {badgeCount > 0 &&
                <View style={styles.badge} >
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        width:24, height:24
    },
    badge:{
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: '#FF0000',
        width: 15,
        height: 15,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    badgeText:{
        color:'#FFF',
        fontSize:10
    }
})

export default TabBarIcon;

