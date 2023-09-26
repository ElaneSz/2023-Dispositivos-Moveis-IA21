import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Comp, { Comp2, Comp3 } from './Components/Multiplos';
import Primeiro from './Components/Primeiro';
import MinMax from './Components/MinMax';
import Aleatorio from './Components/Aleatorio';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <MinMax min={2} max={20}/>
      <MinMax min={20} max={100}/>
      <Aleatorio></Aleatorio>
      <Comp />
      <Comp2 />
      <Comp3 />
      <Primeiro />
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
