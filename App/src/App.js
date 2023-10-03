import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Titulo from './Components/Titulo';
import Botao from './Components/Botao'
{/*import Comp, { Comp2, Comp3 } from './Components/Multiplos';
import Primeiro from './Components/Primeiro';
import MinMax from './Components/MinMax';
import Aleatorio from './Components/Aleatorio';*/}

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      {/*<MinMax min={2} max={20}/>
      <MinMax min={20} max={100}/>
      <Aleatorio min={1} max={60} ></Aleatorio>
      <Aleatorio min={1} max={60} ></Aleatorio>
      <Aleatorio min={1} max={60} ></Aleatorio>
      <Aleatorio min={1} max={60} ></Aleatorio>
      <Aleatorio min={1} max={60} ></Aleatorio>
      <Aleatorio min={1} max={60} ></Aleatorio>
      <Comp />
      <Comp2 />
      <Comp3 />
      <Primeiro />*/}
      <Botao/>
      <Titulo principal="titulo" secundario="subtitulo"></Titulo>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDA0DD',
  },
});
