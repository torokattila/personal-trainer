import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ListCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 10,
        paddingVertical: 10,
        width: 300,
        height: 50,
        alignItems: 'center'
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        justifyContent: 'center',
    }
})
