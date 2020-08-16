//Aqui tb não iremos exportar a tela, e sim o connect.
import  { connect } from 'react-redux';






//Tela
//Ex: nessa tela home, recebo a info que está no reducer (nome q foi digitado na tela Login) 
<Texto>Nome: {props.nome}</Texto>
<Texto>Idade: {props.idade}</Texto>





//Abaixo fçs para exportar.
//Mapear as states q eu escolher para a props na tela:(fçs para ler)
//Abaixo posso usar várias infos de varios reducers.
//Acessar:
const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        email:state.userReducer.email, 
        idade:state.userReducer.idade
    };
}
//Fçs para executar alguma info
//Alterar:
const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{ name }})
    };
}
//Passar as duas fçs acima como parâmetro:
export default connect(mapStateToProps, mapDispatchToProps)(Page);
//Page é a tela(componente).


//Para add uma fç nova, deve ser feito no userReducer: (ex: idade)