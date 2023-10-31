import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import UsuarioLogado from './Components/UsuarioLogado';
import listaProdutosV2 from './Components/Produtos/listaProdutosV2';
import ListaProdutosV2 from './Components/Produtos/listaProdutosV2';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>    
      <ListaProdutosV2/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});