import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    AsyncStorage
} from 'react-native';
import {Restart} from 'fiction-expo-restart';

export const UpdateExerciseButton = ( props ) => {
    const [userId, setUserId] = useState("");
    const [exerciseType, setExerciseType] = useState("");

    const getStorageData = async () => {
		try {
			await AsyncStorage.getItem("User").then(response => {
				if (JSON.parse(response).userId) {
                    setUserId(JSON.parse(response).userId);
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

    const confirmUpdateMessage = () => {
        Alert.alert(
            '',
            'Do you want to update your exercise?',
            [
                { text: 'Cancel', onPress: () => '', style: 'cancel' },
                {
                    text: 'Update', onPress: () => pressUpdateExerciseButton()
                }
            ],
            { cancelable: true }
        );
    };

    const pressUpdateExerciseButton = () => {

        const data = { userId: userId, exerciseType: exerciseType };

        axios.post("http://192.168.1.71:3001/api/update_exercise", data).then(response => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                AsyncStorage.setItem("ExerciseType", exerciseType)
                Restart();
            }
        });
    };

    useEffect(() => {
        if (props.type === "Chest") {
            setExerciseType("Chest");
        } else if (props.type === "Back") {
            setExerciseType("Back");
        } else if (props.type === "Tricep") {
            setExerciseType("Tricep");
        }

        getStorageData();
    }, []);

    return (
        <View style={styles.updateButtonContainer}>
            <TouchableOpacity style={props.type === "Chest" ? styles.chestUpdateButton : props.type === "Back" ? styles.backUpdateButton : styles.tricepUpdateButton} onPress={() => confirmUpdateMessage()}>
                <Text style={styles.updateButtonText}>Finish exercise</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    updateButtonContainer: {
        marginTop: 30,
        marginBottom: 30,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    chestUpdateButton: {
        backgroundColor: "#2196F3",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		paddingVertical: 20,
		paddingHorizontal: 50,
		marginTop: 10,
		borderRadius: 30,
		elevation: 2,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "#333",
		shadowOpacity: 1.3,
		shadowRadius: 30
    },
    backUpdateButton: {
        backgroundColor: "#009688",
        alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		paddingVertical: 20,
		paddingHorizontal: 50,
		marginTop: 10,
		borderRadius: 30,
		elevation: 2,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "#333",
		shadowOpacity: 1.3,
		shadowRadius: 30
    },
    tricepUpdateButton: {
        backgroundColor: "#E65100",
        alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		paddingVertical: 20,
		paddingHorizontal: 50,
		marginTop: 10,
		borderRadius: 30,
		elevation: 2,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "#333",
		shadowOpacity: 1.3,
		shadowRadius: 30
    },
    updateButtonText: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 15
    }
});

export default UpdateExerciseButton;