import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";


let numeroAleatorio = Math.floor(Math.random() * 60)

export default aleatorio => (
    <Text style={ estilo.fontG } >Valor {numeroAleatorio}</Text> 
);


export {aleatorio}

//let numeroAleatorio = Math.floor(Math.random() * todasFrases [categoriaSelecionada].frases.length)
