import React, { useState, useRef, useEffect } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Image,
	AsyncStorage
} from "react-native";
import KeyboardAvoidingWrapper from "../shared/KeyboardAvoidingWrapper";
import AwesomeAlert from "react-native-awesome-alerts";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import axios from "axios";

export const Login = ({ navigation }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [hidePassword, setHidePassword] = useState(true);
	const [showAlertWindow, setShowAlertWindow] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	const passwordRef = useRef(null);

	const getStorageData = async () => {
		try {
			await AsyncStorage.getItem("User").then(response => {
				if (JSON.parse(response).userId) {
					navigation.navigate("Home");
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = () => {
		const data = { username: name, password: password };

		axios.post("https://personal-trainer-phone-api.herokuapp.com/api/loginuser", data).then(response => {
			console.log(response.data)
			if (response.data.error) {
				setAlertMessage(response.data.error);
				showAlert();
			} else {
				setName("");
				setPassword("");
				AsyncStorage.setItem("User", JSON.stringify(response.data));
				navigation.navigate("Home");
			}
		})
	};

	const showAlert = () => {
		setShowAlertWindow(true);
	};

	const hideAlert = () => {
		setShowAlertWindow(false);
	};

	useEffect(() => {
		getStorageData();
	}, []);

	return (
		<KeyboardAvoidingWrapper>
			<View style={styles.container}>
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
				<Image
					source={require("../assets/workout.png")}
					style={styles.loginImage}
				/>

				<View style={styles.formContainer}>
					<Text style={styles.label}>Username:</Text>
					<CustomTextInput
						placeholder="Username"
						icon="user"
						onChangeText={text => setName(text)}
						value={name}
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current.focus()}
					/>

					<Text style={styles.label}>Password:</Text>
					<CustomTextInput
						placeholder="Password"
						icon="lock"
						secureTextEntry={hidePassword}
						onChangeText={text => setPassword(text)}
						isPassword={true}
						hidePassword={hidePassword}
						setHidePassword={setHidePassword}
						value={password}
						ref={passwordRef}
					/>

					<TouchableOpacity
						style={styles.loginButton}
						onPress={() => onSubmit()}
					>
						<Text style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>

					<View style={styles.toggleLoginSignupContainer}>
						<Text style={styles.toggleLoginSignupText}>
							Dont't you have an account?
						</Text>
						<TouchableOpacity
							style={styles.toggleLoginSignupLinkButton}
						>
							<Text
								style={styles.toggleLoginSignupLink}
								onPress={() => navigation.navigate("Signup")}
							>
								Sign up
							</Text>
						</TouchableOpacity>
					</View>
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
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center"
	},
	loginImage: {
		width: 130,
		height: 130,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30
	},
	formContainer: {
		marginTop: 30,
		alignItems: "center"
	},
	label: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#3189DB",
		marginTop: 20
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
		marginBottom: 10,
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
	loginButton: {
		backgroundColor: "#039BE5",
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
	loginButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 15,
		textTransform: "uppercase"
	},
	toggleLoginSignupContainer: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginTop: 30
	},
	toggleLoginSignupText: {
		justifyContent: "center",
		alignContent: "center",
		color: "#1F2937",
		fontSize: 15
	},
	toggleLoginSignupLinkButton: {
		justifyContent: "center",
		alignItems: "center"
	},
	toggleLoginSignupLink: {
		fontSize: 15,
		fontWeight: "bold",
		paddingLeft: 5,
		color: "#039BE5"
	}
});

export default Login;
