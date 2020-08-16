import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import tabBarIcon from '../components/TabBarIcon';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

import TabConfigScreen from '../pages/TabConfigScreen';
import TabBarIcon from '../components/TabBarIcon';


const Tab = createBottomTabNavigator();


export default () => (
    <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:() => <TabBarIcon name={route.name} />
    })}>

        <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'Sobre'}} />
        <Tab.Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}} />
        <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:'Config'}} />

    </Tab.Navigator>
);

