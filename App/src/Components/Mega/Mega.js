import { React, Component } from "react";
import { Text, TextInput } from "react-native";
import estilo from "../../estilo";

export default class Mega extends Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros // Pega a propriedade correta
    }
    alterarqtdeNumero = (qtde) => {
        this.setState({qtdeNumeros: qtde})
    }

    render (){
        return (
            <>
                <Text style={estilo.fontG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder="Quantidade de números:"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarqtdeNumero}>
                </TextInput>
            </>
        )
    }
}