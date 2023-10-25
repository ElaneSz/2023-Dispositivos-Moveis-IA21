import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ParImpar from './Components/ParImpar';
import Familia from './Components/Relacao/Familia';
import Membros from './Components/Relacao/Membros';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>    
      <Familia>
        <Membros nome="Elane" sobrenome="Souza" />
        <Membros nome="Emilly" sobrenome="Souza" />
        <Membros nome="Emerson" sobrenome="Souza" />
      </Familia>
      <Familia>
        <Membros nome="Juliana" sobrenome="Lobato" />
      </Familia>
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