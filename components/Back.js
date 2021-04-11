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
import { backTypeOne, backTypeTwo, shoulderTypeOne, shoulderTypeTwo, shoulderTypeThree } from '../workoutTypes';

export default function Back() {
    const [localBackTypeOne, setLocalBackTypeOne] = useState(backTypeOne);
    const [localBackTypeTwo, setLocalBackTypeTwo] = useState(backTypeTwo);
    const [localShoulderTypeOne, setLocalShoulderTypeOne] = useState(shoulderTypeOne);
    const [localShoulderTypeTwo, setLocalShoulderTypeTwo] = useState(shoulderTypeTwo);
    const [localShoulderTypeThree, setLocalShoulderTypeThree] = useState(shoulderTypeThree);

    const pressBackTypeOne = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalBackTypeOne((prevBackType) => {
                        return prevBackType.filter(backType => backType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressBackTypeTwo = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalBackTypeTwo((prevBackType) => {
                        return prevBackType.filter(backType => backType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressShoulderTypeOne = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalShoulderTypeOne((prevShoulderType) => {
                        return prevShoulderType.filter(shoulderType => shoulderType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressShoulderTypeTwo = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalShoulderTypeTwo((prevShoulderType) => {
                        return prevShoulderType.filter(shoulderType => shoulderType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    const pressShoulderTypeThree = (key) => {
        Alert.alert(
            '',
            'Are you sure want to delete this card?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Delete', onPress: () => setLocalShoulderTypeThree((prevShoulderType) => {
                        return prevShoulderType.filter(shoulderType => shoulderType.key != key);
                    })
                }
            ],
            { cancelable: true }
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginTop: 5 }}>
                <View style={styles.workoutTypeView}>
                    <Text style={styles.workoutTypeTitle}>Back Type 1</Text>
                    <FlatList
                        data={localBackTypeOne}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => pressBackTypeOne(item.key)}>
                                <ListCard cardColorType="Back">
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
                                <ListCard cardColorType="Back">
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
                                <ListCard cardColorType="Back">
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
                                <ListCard cardColorType="Back">
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
                                <ListCard cardColorType="Back">
                                    <Text style={styles.cardText}>{item.title}</Text>
                                </ListCard>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View >
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
