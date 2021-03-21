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
import { chestTypeOne, chestTypeTwo, bicepTypeOne, bicepTypeTwo, bicepTypeThree } from '../workoutTypes';

export default function Chest() {
    const [localChestTypeOne, setLocalChestTypeOne] = useState(chestTypeOne);
    const [localChestTypeTwo, setLocalChestTypeTwo] = useState(chestTypeTwo);
    const [localBicepTypeOne, setLocalBicepTypeOne] = useState(bicepTypeOne);
    const [localBicepTypeTwo, setLocalBicepTypeTwo] = useState(bicepTypeTwo);
    const [localBicepTypeThree, setLocalBicepTypeThree] = useState(bicepTypeThree);

    const pressChessTypeOne = (key) => {
        setLocalChestTypeOne((prevChestType) => {
            return prevChestType.filter(chestType => chestType.key != key);
        });
    }

    const pressChessTypeTwo = (key) => {
        setLocalChestTypeTwo((prevChestType) => {
            return prevChestType.filter(chestType => chestType.key != key);
        });
    }

    const pressBicepTypeOne = (key) => {
        setLocalBicepTypeOne((prevBicepType) => {
            return prevBicepType.filter(bicepType => bicepType.key != key);
        });
    }

    const pressBicepTypeTwo = (key) => {
        setLocalBicepTypeTwo((prevBicepType) => {
            return prevBicepType.filter(bicepType => bicepType.key != key);
        });
    }

    const pressBicepTypeThree = (key) => {
        setLocalBicepTypeThree((prevBicepType) => {
            return prevBicepType.filter(bicepType => bicepType.key != key);
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Chest Type 1</Text>
                    <FlatList
                        data={localChestTypeOne}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressChessTypeOne(item.key)}>
                                <ListCard>
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
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressChessTypeTwo(item.key)}>
                                <ListCard>
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
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBicepTypeOne(item.key)}>
                                <ListCard>
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
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBicepTypeTwo(item.key)}>
                                <ListCard>
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
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBicepTypeThree(item.key)}>
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
