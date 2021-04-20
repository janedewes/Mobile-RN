import styled from 'styled-components/native';

// Container
export const Container = styled.KeyboardAvoidingView`
flex:1;
`;

// Header
export const Header = styled.View`
height:150;
background-color:#3574CB;
justify-content:center;
padding-left:20px;
`;

// Titulo 
export const HeaderTitle = styled.Text`
color:#FFF;
font-size:27px;
`;

// Menu
export const Menu = styled.View`
background-color:#3574CB;
flex-direction:row;
padding-left:20px;
`;

// Botao
export const MenuItem = styled.TouchableHighlight`
padding:20px;
border-bottom-width:5px;
border-bottom-color:${props=>props.active?'#FFF':'#3574CB'};
`;

// Texto
export const MenuItemText = styled.Text`
color:#FFF;
font-size:18px;
`;


// Formulario de login
export const Input = styled.TextInput`
margin:10px 20px;
border-bottom-width:2px;
border-bottom-color:#999;
height:40px;
font-size:16px;
color:#333;
`;

// Botoes
export const ActionButton =styled.TouchableHighlight`
background-color:#3574CB;
justify-content:center;
align-itemns:center;
height:40px;
border-radius:5px;
margin:20px;
box-shadow: 0px 2px 2px #999;
`;

export const ActionButtonText = styled.Text`
color:#FFF;
font-size:16px;
`;
