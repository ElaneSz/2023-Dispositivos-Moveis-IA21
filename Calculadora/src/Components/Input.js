// Input.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ value, placeholder, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1, // Ocupa todo o espaço disponível na direção do eixo principal (geralmente, é a altura no caso de uma única coluna)
    width: '100%', // Ocupa 100% da largura da tela
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
});
