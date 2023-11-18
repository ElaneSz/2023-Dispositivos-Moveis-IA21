// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Medusa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6a1b9a', // Cor sólida do cabeçalho
    width: '100%',
    height: '10%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff', // Cor do texto do cabeçalho
    fontSize: 20,
    fontWeight: 'bold',
  },
});
