import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import ListCard from '../shared/ListCard';
import { tricepType } from '../workoutTypes';
import UpdateExerciseButton from '../shared/UpdateExerciseButton';

export default function Back() {
    const [localTricepType, setLocalTricepType] = useState(tricepType);

    const pressTricepType = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalTricepType((prevTricepType) => {
                        return prevTricepType.filter(tricepType => tricepType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
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

                <UpdateExerciseButton type="Tricep" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    workoutTypeView: {
        marginTop: 30
    },
    workoutTypeTitle: {
        fontFamily: 'nunito-bold',
        color: '#424242',
        fontSize: 20,
        textAlign: 'center'
    },
    cardText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#fff'
    }
});
