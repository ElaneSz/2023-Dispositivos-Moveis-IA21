import { React, Component } from "react";
import { Button, Text, TextInput } from "react-native";
import estilo from "../../estilo";

export default class Mega extends Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros, // Pega a propriedade correta
        numeros: []
    }

    alterarqtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumerosNaoContido = nums => {
        const novo = parseInt(Math.random()*60)+1
        return nums.includes(novo) ? this.gerarNumerosNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array (this.state.qtdeNumeros)
        .fill()
        .reduce(n => [...n, this.gerarNumerosNaoContido(n)], [])
        this.setState({numeros})
    }

    render (){
        return (
            <>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder="Quantidade de números:"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarqtdeNumero}>
                </TextInput>
                <Button title="Gerar" onPress={this.gerarNumeros}/>
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}