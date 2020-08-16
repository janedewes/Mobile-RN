import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

//Importar de Store.js
import { store, persistor} from './src/Store';


//OBS: Colocar store e persistor importados acima dentro das chaves:
export default () => (
  <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>

      //aqui dentro coloco as telas.

    </PersistGate>
  </Provider>
)





//Caixa central: Provider
//Caixinhas: Store.js 

//Para salvar as infos, mesmo app sendo fechado, config do Persist  com async-storage.
//Para isso alterar App.js e Store.js