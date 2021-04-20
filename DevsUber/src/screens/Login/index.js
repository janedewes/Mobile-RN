// TELA LOGIN
import React, { useState} from 'react';
import { Platform } from 'react-native';
import { 
  Container, 
  Header, 
  HeaderTitle,
  Menu, 
  MenuItem, 
  MenuItemText, 
  Input, 
  ActionButton, 
  ActionButtonText
 } from './styled';



const Page = () => {


  // Info sobre a seleção da barra inferior do login e cadastrar
  const [activeMenu, setActiveMenu] = useState('signin');


    return (
      <Container behavior={Platform.OS === 'ios'?'padding':null}>
        <Header>
          <HeaderTitle>DevsUber</HeaderTitle>
        </Header>

        <Menu>
          <MenuItem active={activeMenu == 'signin'} onPress={()=>setActiveMenu('signin')} underlayColor="transparent">
            <MenuItemText>Login</MenuItemText>
          </MenuItem>
          <MenuItem active={activeMenu == 'signup'} onPress={()=>setActiveMenu('signup')} underlayColor="transparent">
            <MenuItemText>Cadastrar</MenuItemText>
          </MenuItem>
        </Menu>



        {activeMenu == 'signup' &&
          <Input placeholder="Name" />
        }
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />



        {activeMenu == 'signin' && 
          <ActionButton>
            <ActionButtonText>Login</ActionButtonText>
          </ActionButton>
        }
        {activeMenu == 'signup' && 
          <ActionButton>
            <ActionButtonText>Cadastrar</ActionButtonText>
          </ActionButton>
        }

      </Container>
    );
  }

  export default Page;
