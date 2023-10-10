import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Contador from './Components/Contador';


export default function App() { 
  return (
    <SafeAreaView style={styles.container}>
      <Contador inicial={100} passo={2}/>
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
