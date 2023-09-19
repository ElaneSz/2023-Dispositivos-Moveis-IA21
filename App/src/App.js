import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Primeiro from './Components/Primeiro';
import Comp, {Comp2, Comp3} from './Components/Multiplos';

export default function App(){
  return(
        <SafeAreaView style={style.App}>
          <Primeiro/>
          <Comp/>
          <Comp2/>
          <Comp3/>
        </SafeAreaView>
  )

  const style = StyleSheet.creat ({
    App:{
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  })
}