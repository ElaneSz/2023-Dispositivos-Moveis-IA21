import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Quadrado from './Components/Layout/Quadrado';
import FlexboxV1 from './Components/Layout/FlexboxV1';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>    
      <FlexboxV1/>
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