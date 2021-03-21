import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import ListCard from '../shared/ListCard';
import { tricepType } from '../workoutTypes';

export default function Back() {
    const [localTricepType, setLocalTricepType] = useState(tricepType);

    const pressTricepType = (key) => {
        setLocalTricepType((prevTricepType) => {
            return prevTricepType.filter(tricepType => tricepType.key != key);
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Tricep Series</Text>
                    <FlatList
                        data={localTricepType}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressTricepType(item.key)}>
                                <ListCard>
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#787878'
    },
    workoutTypeView: {
        marginTop: 30
    },
    workoutTypeTitle: {
        fontFamily: 'nunito-bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    cardText: {
        fontFamily: 'nunito-bold',
        fontSize: 15
    }
});
