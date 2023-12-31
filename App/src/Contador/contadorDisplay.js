import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import estilo from "../estilo";

export default props => {
    return (
        <SafeAreaView style={style.Display} >
            <Text style={[estilo.fontG, style.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    }
})