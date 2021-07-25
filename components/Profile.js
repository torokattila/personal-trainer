import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Alert,
	AsyncStorage
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../shared/KeyboardAvoidingWrapper";
import AwesomeAlert from "react-native-awesome-alerts";
import axios from "axios";
import { Restart } from "fiction-expo-restart";

export const Profile = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [newUsername, setNewUsername] = useState("");
	const [userId, setUserId] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [hidePassword, setHidePassword] = useState(true);
	const [showAlertWindow, setShowAlertWindow] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const oldPasswordRef = useRef(null);
	const newPasswordRef = useRef(null);

	const confirmChangeCredentials = () => {
		Alert.alert(
			"",
			"Do you want to change your credentials?",
			[
				{ text: "Cancel", onPress: "", style: "cancel" },
				{ text: "Change", onPress: () => pressUpdateCredentials() }
			],
			{
				cancelable: true
			}
		);
	};

	const confirmDeleteProfile = () => {
		Alert.alert(
			"",
			"Do you want to delete your profile?",
			[
				{ text: "Cancel", onPress: "", style: "cancel" },
				{ text: "Delete", onPress: () => pressDeleteProfile() }
			],
			{
				cancelable: true
			}
		);
	};

	const pressUpdateCredentials = () => {
		if (newUsername === "" && oldPassword === "" && newPassword === "") {
			setAlertMessage(
				"If you want to change your credentials, please fill all the input fields!"
			);
			showAlert();
		} else {
			const data = {
				userId: userId,
				oldUsername: username,
				newUsername: newUsername,
				oldPassword: oldPassword,
				newPassword: newPassword
			};

			axios
				.post("http://192.168.1.71:3001/api/changecredentials", data)
				.then(response => {
					if (response.data.error) {
						console.log(response.data.error);
						setAlertMessage(response.data.error);
						showAlert();
					} else {
						AsyncStorage.setItem(
							"User",
							JSON.stringify(response.data)
						);
						Restart();
					}
				});
		}
	};

    const removeStorage = async () => {
		try {
			await AsyncStorage.removeItem("User");
			await AsyncStorage.removeItem("ExerciseType");
			navigation.navigate("Login");
		} catch (error) {
			alert(error);
		}
	};

	const pressDeleteProfile = () => {
        const data = { userId: userId };
		axios
			.post("http://192.168.1.71:3001/api/deleteuser", data)
			.then(response => {
				if (response.data.error) {
					setAlertMessage(response.data.error);
					showAlert();
				} else {
                    removeStorage();
                }
			});
	};

	const showAlert = () => {
		setShowAlertWindow(true);
	};

	const hideAlert = () => {
		setShowAlertWindow(false);
	};

	const getStorageData = async () => {
		try {
			await AsyncStorage.getItem("User").then(response => {
				setUsername(JSON.parse(response).username);
				setUserId(JSON.parse(response).userId);
			});
		} catch (error) {
			alert(error);
			console.log(error);
		}
	};

	useEffect(() => {
		getStorageData();
	}, []);

	return (
		<KeyboardAvoidingWrapper>
			<View style={styles.profileContainer}>
				<AwesomeAlert
					show={showAlertWindow}
					showProgress={false}
					title=""
					message={alertMessage}
					closeOnTouchOutside={false}
					closeOnHardwareBackPress={false}
					showConfirmButton={true}
					confirmText="OK"
					confirmButtonColor="#3189DB"
					onCancelPressed={() => {
						hideAlert();
					}}
					onConfirmPressed={() => {
						hideAlert();
					}}
				/>

				<View style={styles.currentUsernameContainer}>
					<Text style={styles.currentUsername}>
						Your current username: {username}
					</Text>
				</View>

				<Text style={styles.changeCredentialsTitle}>
					Edit your credentials
				</Text>

				<View style={styles.changeCredentialsContainer}>
					<Text style={styles.label}>Your new username:</Text>
					<CustomTextInput
						placeholder="Username"
						icon="user"
						onChangeText={text => setNewUsername(text)}
						value={newUsername}
						returnKeyType="next"
						onSubmitEditing={() => oldPasswordRef.current.focus()}
					/>

					<Text style={styles.label}>Current password:</Text>
					<CustomTextInput
						placeholder="Password"
						icon="lock"
						secureTextEntry={hidePassword}
						onChangeText={text => setOldPassword(text)}
						isPassword={true}
						hidePassword={hidePassword}
						setHidePassword={setHidePassword}
						value={oldPassword}
						ref={oldPasswordRef}
						returnKeyType="next"
						onSubmitEditing={() => newPasswordRef.current.focus()}
					/>

					<Text style={styles.label}>New password:</Text>
					<CustomTextInput
						placeholder="New password"
						icon="lock"
						secureTextEntry={hidePassword}
						onChangeText={text => setNewPassword(text)}
						isPassword={true}
						hidePassword={hidePassword}
						setHidePassword={setHidePassword}
						value={newPassword}
						ref={newPasswordRef}
					/>

					<TouchableOpacity
						style={styles.changeCredentialsButton}
						onPress={() => confirmChangeCredentials()}
					>
						<Text style={styles.changeCredentialsButtonText}>
							change credentials
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.deleteProfileButton}
						onPress={() => confirmDeleteProfile()}
					>
						<Text style={styles.deleteProfileButtonButtonText}>
							delete profile
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingWrapper>
	);
};

const CustomTextInput = React.forwardRef(
	(
		{ label, icon, isPassword, hidePassword, setHidePassword, ...props },
		ref
	) => {
		return (
			<View>
				<View style={styles.leftIcon}>
					<AntDesign name={icon} size={30} color="#039BE5" />
				</View>
				<Text>
					{label}
				</Text>
				<TextInput
					ref={ref}
					style={styles.customTextInputStyle}
					{...props}
				/>

				{isPassword &&
					<TouchableOpacity
						style={styles.rightIcon}
						onPress={() => setHidePassword(!hidePassword)}
					>
						<Ionicons
							name={hidePassword ? "md-eye-off" : "md-eye"}
							size={30}
							color="silver"
						/>
					</TouchableOpacity>}
			</View>
		);
	}
);

const styles = StyleSheet.create({
	profileContainer: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginTop: 10
	},
	currentUsername: {
		fontWeight: "bold",
		color: "#3189DB",
		fontSize: 17
	},
	changeCredentialsTitle: {
		fontWeight: "bold",
		color: "#3189DB",
		fontSize: 25,
		marginTop: 20
	},
	changeCredentialsContainer: {
		marginTop: 10,
		alignItems: "center"
	},
	label: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#3189DB",
		marginTop: 7,
		marginBottom: -3
	},
	customTextInputStyle: {
		padding: 10,
		width: 250,
		borderRadius: 50,
		paddingLeft: 55,
		borderColor: "#3189DB",
		borderWidth: 1,
		fontSize: 16,
		height: 60,
		marginVertical: 3,
		marginBottom: 2,
		color: "#3189DB"
	},
	leftIcon: {
		left: 15,
		top: 35,
		position: "absolute",
		zIndex: 1
	},
	rightIcon: {
		right: 15,
		top: 35,
		position: "absolute",
		zIndex: 1
	},
	changeCredentialsButton: {
		backgroundColor: "#fff",
		borderColor: "#039BE5",
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		paddingVertical: 20,
		paddingHorizontal: 40,
		marginTop: 40,
		borderRadius: 30,
		elevation: 2,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "#333",
		shadowOpacity: 1.3,
		shadowRadius: 30
	},
	changeCredentialsButtonText: {
		color: "#039BE5",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontSize: 15
	},
	deleteProfileButton: {
		backgroundColor: "#fff",
		borderColor: "#AD1457",
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		paddingVertical: 20,
		paddingHorizontal: 40,
		marginTop: 40,
		borderRadius: 30,
		elevation: 2,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "#333",
		shadowOpacity: 1.3,
		shadowRadius: 30,
		marginBottom: 10
	},
	deleteProfileButtonButtonText: {
		color: "#AD1457",
		fontWeight: "bold",
		textTransform: "uppercase",
		fontSize: 15
	}
});

export default Profile;
