import React from 'react';
import { SafeAreaView } from 'react-native';

import Primeiro from './Components/Primeiro';
import Comp, {Comp2, Comp3} from './Components/Multiplos';

export default function App(){
  return(
        <SafeAreaView>
          <Primeiro/>
          <Comp/>
          <Comp2/>
          <Comp3/>
        </SafeAreaView>
  );
}