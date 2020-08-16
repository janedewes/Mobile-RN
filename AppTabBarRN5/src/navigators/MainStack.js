import React from 'react';
import { Button, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';


// Criar o StackNavigator:
const MainStack = createStackNavigator();

// Usar o StackNavigator (dentro dele colocamos as telas):
export default () => (
    <MainStack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerStyle:{
            backgroundColor:'#66FF66'
        },
        headerTitleStyle:{
            color:'#000',
            fontSize:25
        }
    }}>

        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
);