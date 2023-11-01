import React from 'react'
import { Text } from 'react-native'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={{
            height: 100,
            width: 100,
            backgroundColor:props.cor || '#000'
        }}
        />
    )
}