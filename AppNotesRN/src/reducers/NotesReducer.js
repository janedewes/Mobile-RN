import { act } from "react-test-renderer";

const initialState = {
    list:[
        {title: 'Primeira Nota', body: 'Testando 1,2,3...'}
    ]
};

export default (state = initialState, action) => {
    let newList = [ ...state.list ];

    switch(action.type) {
        //Abaixo add nota:
        case 'ADD_NOTE':
            newList.push({
                title: action.payload.title,
                body: action.payload.body
            });
        break;
        //Abaixo editar nota:
        case 'EDIT_NOTE':
            if(newList[action.payload.key]) {
                newList[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body
                };
            }
        break;
        //Abaixo funçao de excluir nota:
        case 'DEL_NOTE':
            newList = newList.filter((item, index) => index != action.payload.key);
        break;
    }
    return { ...state, list:newList };
}