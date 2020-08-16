import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import Reducers from './reducers/index';

//Antes da store:
const persistedReducer = persistReducer({
    key:'root', //Recomendação do RN
    storage: AsyncStorage, //No RN só tem essa opção.
    whitelist:['userReducer'], //Reducers que queremos que se mantenham gravados. 
    blacklist:[]  //Reducers que não queremos q fiquem gravados.(n é um item obrigatório)
}, Reducers);


//Manda a fç acima(persistedReducer) para o createStore:
const store = createStore(persistedReducer);

let persistor = persistStore(store);


//Exportar store e o persistor:
export { store, persistor };



//Na pasta reducers estão cas 'caixinhas'.
//Aqui criar o persistor.