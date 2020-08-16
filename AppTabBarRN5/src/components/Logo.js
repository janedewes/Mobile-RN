import React from 'react';
import { Image } from 'react-native';

function Logo() {
    return (
        <Image
            style={{width:40, height:40, marginLeft:10}}
            source={require('../images/browser.png')}
        />
    );
}

export default Logo;