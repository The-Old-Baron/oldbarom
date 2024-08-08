import React, { createContext, useState, useEffect } from 'react';
import {signOut} from 'aws-amplify/auth';
// Criação do contexto do usuário
export const UserContext = createContext();

// Provedor do contexto do usuário
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recupera o usuário do localStorage, se existir
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Efeito para salvar o usuário no localStorage sempre que ele mudar
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Função para login
  const login = (userData) => {
    setUser(userData);
  };

  // Função para logout
  const logout = () => {
    try{
      signOut();
      setUser(null);
    }
    catch(e){
      console.log(e);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};