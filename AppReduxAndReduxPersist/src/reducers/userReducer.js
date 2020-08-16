//Exportar uma fç que serve para Armazenar e gerenciar infos:

//Abaixo criar a info:
const initialState = {
    name:'Paulo', 
    email:'paulosilva@hotmail.com',
    idade:90
};

//Criar fç (ela tem 2 parâmetros):
export default (state = initialState, action) => {

    //Criar as actions(modificadores), possibilitar o usuário modificar alguma info.
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name:action.payload.name};
            break;
        case 'SET_EMAIL':
            return {...state, email:action.payload.email};
            break;
        case 'SET_IDADE':
            return {...state, idade:action.payload.idade};
            break;
    }
    //Se não passar por nenhuma action acima, ele retorna o próprio state:
    return state;
}
//Salva enquanto app estiver rodando.
//...state = copiar a state.
//Essa é uma das 'caixinhas'!