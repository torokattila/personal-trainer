import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ListCard(props) {
    let cardColor = props.cardColorType == 'Chest' ? '#4FC3F7' : props.cardColorType == 'Back' ? '#4DB6AC' : '#FF9800'
    const cardStyle = {
        borderRadius: 20,
        elevation: 6,
        backgroundColor: cardColor,
        shadowOffset: { width: 0, height: 10 },
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        marginHorizontal: 4,
        marginVertical: 10,
        paddingVertical: 10,
        width: 350,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    }
    
    return (
        <View style={cardStyle}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
        justifyContent: 'center',
    }
})
