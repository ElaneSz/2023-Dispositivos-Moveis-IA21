import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Quadrado from './Components/Layout/Quadrado';
import FlexboxV1 from './Components/Layout/FlexboxV1';
import FlexboxV2 from './Components/Layout/FlexboxV2';
import FlexboxV3 from './Components/Layout/FlexboxV3';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>    
      <FlexboxV3/>
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