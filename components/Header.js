import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header({ title, type }) {
    return (
        <View style={styles.header}>
            <Text style={type == 'workoutHeader' ? styles.workoutTypeHeaderText : styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginBottom: 20,
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 25
    },
    workoutTypeHeaderText: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 25,
        marginRight: '20%'
    }
})
