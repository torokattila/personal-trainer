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
import { chestTypeOne, chestTypeTwo, bicepTypeOne, bicepTypeTwo, bicepTypeThree } from '../workoutTypes';
import UpdateExerciseButton from '../shared/UpdateExerciseButton';

export default function Chest() {
    const [localChestTypeOne, setLocalChestTypeOne] = useState(chestTypeOne);
    const [localChestTypeTwo, setLocalChestTypeTwo] = useState(chestTypeTwo);
    const [localBicepTypeOne, setLocalBicepTypeOne] = useState(bicepTypeOne);
    const [localBicepTypeTwo, setLocalBicepTypeTwo] = useState(bicepTypeTwo);
    const [localBicepTypeThree, setLocalBicepTypeThree] = useState(bicepTypeThree);

    const pressChessTypeOne = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalChestTypeOne((prevChestType) => {
                        return prevChestType.filter(chestType => chestType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressChessTypeTwo = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalChestTypeTwo((prevChestType) => {
                        return prevChestType.filter(chestType => chestType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressBicepTypeOne = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalBicepTypeOne((prevBicepType) => {
                        return prevBicepType.filter(bicepType => bicepType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressBicepTypeTwo = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalBicepTypeTwo((prevBicepType) => {
                        return prevBicepType.filter(bicepType => bicepType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressBicepTypeThree = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalBicepTypeThree((prevBicepType) => {
                        return prevBicepType.filter(bicepType => bicepType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginTop: 5, borderRadius: 20 }}>
                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Chest Type 1</Text>
                    <FlatList
                        data={localChestTypeOne}
                        keyExtractor={(item, index) => item.key}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressChessTypeOne(item.key)}>
                                <ListCard cardColorType="Chest">
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Chest Type 2</Text>
                    <FlatList
                        data={localChestTypeTwo}
                        keyExtractor={(item, index) => item.key}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressChessTypeTwo(item.key)}>
                                <ListCard cardColorType="Chest">
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Bicep Type 1</Text>
                    <FlatList
                        data={localBicepTypeOne}
                        keyExtractor={(item, index) => item.key}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBicepTypeOne(item.key)}>
                                <ListCard cardColorType="Chest">
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Bicep Type 2</Text>
                    <FlatList
                        data={localBicepTypeTwo}
                        keyExtractor={(item, index) => item.key}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBicepTypeTwo(item.key)}>
                                <ListCard cardColorType="Chest">
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Bicep Type 3</Text>
                    <FlatList
                        data={localBicepTypeThree}
                        keyExtractor={(item, index) => item.key}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBicepTypeThree(item.key)}>
                                <ListCard cardColorType="Chest">
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <UpdateExerciseButton type="Chest" />
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
        borderTopRightRadius: 40,
    },
    workoutTypeView: {
        marginTop: 30,
    },
    workoutTypeTitle: {
        fontFamily: 'nunito-bold',
        color: '#212121',
        fontSize: 20,
        textAlign: 'center'
    },
    cardText: {
        fontFamily: 'nunito-bold',
        fontSize: 20,
        color: 'white'
    }
});
