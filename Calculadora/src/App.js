// App.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from './Components/Input';
import Button from './Components/Button';
import Header from './Components/Header';
import { globalStyles } from './styles';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(inputText.replace(',', '.'));
        setResult(evalResult.toString());
        setInputText(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (/\d/.test(value) || value === '0') {
      setInputText((prev) => (prev === '0' ? value : prev + value));
    } else if (value === '.' && /\d*\.\d*$/.test(inputText)) {
      // Permite apenas um ponto decimal
      return;
    } else if (/[+\-*\/]/.test(value)) {
      // Adiciona o sinal apenas se o último caractere não for um sinal
      setInputText((prev) => {
        const lastChar = prev.slice(-1);
        return /\d/.test(lastChar) ? prev + value : prev.slice(0, -1) + value;
      });
    } else if (value === '.') {
      // Adiciona o ponto decimal se o último caractere não for um ponto
      setInputText((prev) => (/\d*\.$/.test(prev) ? prev : prev + value));
    }
  };

  return (
    <View style={globalStyles.container}>
       <Header /> 

      <Input
        value={inputText}
        placeholder="Enter number"
        onChangeText={(text) => setInputText(text)}
      />

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('7')} text="7" />
        <Button onPress={() => handleButtonPress('8')} text="8" />
        <Button onPress={() => handleButtonPress('9')} text="9" />
        <Button onPress={() => handleButtonPress('+')} text="+" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('4')} text="4" />
        <Button onPress={() => handleButtonPress('5')} text="5" />
        <Button onPress={() => handleButtonPress('6')} text="6" />
        <Button onPress={() => handleButtonPress('-')} text="-" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('1')} text="1" />
        <Button onPress={() => handleButtonPress('2')} text="2" />
        <Button onPress={() => handleButtonPress('3')} text="3" />
        <Button onPress={() => handleButtonPress('*')} text="*" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('0')} text="0" />
        <Button onPress={() => handleButtonPress('.')} text="." />
        <Button onPress={() => handleButtonPress('/')} text="/" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('=')} text="=" buttonStyle={globalStyles.operationButton} />
        <Button onPress={() => setInputText('')} text="C" buttonStyle={globalStyles.operationButton} />
      </View>
    </View>
  );
}
