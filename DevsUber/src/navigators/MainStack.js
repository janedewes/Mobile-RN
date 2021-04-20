import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
//import HomeStack from './HomeStack';


export default createAppContainer(createStackNavigator({
    // Telas
    // A tela preload verifica se o usuários ja está ou não estã logado
    Preload, 
    Login,
    //HomeStack

}, {
    // Garantir que o primeiro a ser carregado será o Preload
    initialRouteName:'Preload',
    defaultNavigationOptions:{
        header:null
    }
}));