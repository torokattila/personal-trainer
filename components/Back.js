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
import { backTypeOne, backTypeTwo, shoulderTypeOne, shoulderTypeTwo, shoulderTypeThree } from '../workoutTypes';

export default function Back() {
    const [localBackTypeOne, setLocalBackTypeOne] = useState(backTypeOne);
    const [localBackTypeTwo, setLocalBackTypeTwo] = useState(backTypeTwo);
    const [localShoulderTypeOne, setLocalShoulderTypeOne] = useState(shoulderTypeOne);
    const [localShoulderTypeTwo, setLocalShoulderTypeTwo] = useState(shoulderTypeTwo);
    const [localShoulderTypeThree, setLocalShoulderTypeThree] = useState(shoulderTypeThree);

    const pressBackTypeOne = (key) => {
        setLocalBackTypeOne((prevBackType) => {
            return prevBackType.filter(backType => backType.key != key);
        });
    }

    const pressBackTypeTwo = (key) => {
        setLocalBackTypeTwo((prevBackType) => {
            return prevBackType.filter(backType => backType.key != key);
        });
    }

    const pressShoulderTypeOne = (key) => {
        setLocalShoulderTypeOne((prevShoulderType) => {
            return prevShoulderType.filter(shoulderType => shoulderType.key != key);
        });
    }

    const pressShoulderTypeTwo = (key) => {
        setLocalShoulderTypeTwo((prevShoulderType) => {
            return prevShoulderType.filter(shoulderType => shoulderType.key != key);
        });
    }

    const pressShoulderTypeThree = (key) => {
        setLocalShoulderTypeThree((prevShoulderType) => {
            return prevShoulderType.filter(shoulderType => shoulderType.key != key);
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Back Type 1</Text>
                    <FlatList
                        data={localBackTypeOne}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBackTypeOne(item.key)}>
                                <ListCard>
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Back Type 2</Text>
                    <FlatList
                        data={localBackTypeTwo}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBackTypeTwo(item.key)}>
                                <ListCard>
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Shoulder Type 1</Text>
                    <FlatList
                        data={localShoulderTypeOne}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressShoulderTypeOne(item.key)}>
                                <ListCard>
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Shoulder Type 2</Text>
                    <FlatList
                        data={localShoulderTypeTwo}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressShoulderTypeTwo(item.key)}>
                                <ListCard>
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Shoulder Type 3</Text>
                    <FlatList
                        data={localShoulderTypeThree}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressShoulderTypeThree(item.key)}>
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
