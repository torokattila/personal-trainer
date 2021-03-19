import React, { useState } from 'react';
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Card, CardImage } from 'react-native-cards';

export default function Home({ navigation }) {
    const [workoutType, setWorkoutType] = useState([
        { name: 'Chest', image: require('../assets/chest.jpg'), route: 'Chest', key: '1' },
        { name: 'Back', image: require('../assets/back.jpg'), route: 'Back', key: '2' },
        { name: 'Tricep', image: require('../assets/tricep.jpg'), route: 'Tricep', key: '3' }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={workoutType}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.route, item)}>
                        <ScrollView>
                            <Card style={styles.cardStyle}>
                                <CardImage
                                    source={item.image}
                                    title={item.route}
                                    style={styles.cardImage}
                                />
                            </Card>
                        </ScrollView>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#787878',
    },
    cardStyle: {
        flex: 1,
        width: 300,
        height: '100%',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginTop: 35,
    },
})
