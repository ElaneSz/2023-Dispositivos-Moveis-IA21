import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const SorteadorNumeros = () => {
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  useEffect(() => {
    const gerarNumerosAleatorios = () => {
      const novosNumeros = [];
      while (novosNumeros.length < 6) {
        const novoNumero = Math.floor(Math.random() * 60) + 1;
        if (!novosNumeros.includes(novoNumero)) {
          novosNumeros.push(novoNumero);
        }
      }
      setNumerosSorteados(novosNumeros);
    };

    gerarNumerosAleatorios();
  }, []);

  return (
    <>
      <Text>Números sorteados:</Text>
      <Text>{numerosSorteados.join(', ')}</Text>
    </>
  );
};

export default SorteadorNumeros;





//let numeroAleatorio = Math.floor(Math.random() * todasFrases [categoriaSelecionada].frases.length)
