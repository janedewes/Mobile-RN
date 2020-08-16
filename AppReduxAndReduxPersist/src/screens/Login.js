//Usar essa tela de exemplo para dar o connect:
//Coneção entre o redux e a tela.
//Ao final da tela não será dado o export na tela em sí e sim no connect.

import { connect } from 'react-redux';


// criar toda a tela 



//Ex: modificar as infos: Criar um campo de texto, 
//nesse campo colocamos o nome, ele irá trocar na state do reducer,
//então, essas infos serão cmpartilhadas com outras telas:
<Input value={props.name} onChangeText={e=>props.setName(e)} /> //OBS:(const Input = styled.TextInput``;)

//Só para visualizar a alteração:
<Texto>NOME: {props.name}</Texto>
<Texto>IDADE: {props.idade}</Texto>


//Abaixo fçs para exportar.
//Mapear as states q eu escolher para a props na tela:(fçs para ler)
const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        email:state.userReducer.email,
        idade:state.userReducer.idade
    };
}
//Fçs para executar alguma info
const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{ name }})
    };
}
//Passar as duas fçs acima como parâmetro:
export default connect(mapStateToProps, mapDispatchToProps)(Page);
//Page é a tela.

