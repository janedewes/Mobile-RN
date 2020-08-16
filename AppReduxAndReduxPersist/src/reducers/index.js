//Esse arq junta todas as caixinhas em uma só, e vai p Store.js:
//Importar todos os reducers e juntar eles no combineReducers:
import  { combineReducers } from 'redux';

import userReducer from './userReducer';

//Abaixo colocar todos os arqs criados:
export default combineReducers({
    userReducer
});
