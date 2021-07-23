import React, { useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	ScrollView,
	Text,
	Alert,
	AsyncStorage
} from "react-native";
import { Card, CardImage } from "react-native-cards";

export default function Home({ navigation }) {
	const [workoutType, setWorkoutType] = useState([
		{
			name: "Chest",
			image: require("../assets/chest.jpg"),
			route: "Chest",
			key: "1"
		},
		{
			name: "Back",
			image: require("../assets/back.jpg"),
			route: "Back",
			key: "2"
		},
		{
			name: "Tricep",
			image: require("../assets/tricep.jpg"),
			route: "Tricep",
			key: "3"
		}
	]);

	const removeStorage = async () => {
		try {
			await AsyncStorage.removeItem("User");
			navigation.navigate("Login");
		} catch (error) {
			alert(error);
		}
	};

	const logout = () => {
		Alert.alert(
			"",
			"Do you want to logout?",
			[
				{ text: "Cancel", onPress: "", style: "cancel" },
				{ text: "Logout", onPress: () => removeStorage() }
			],
			{
				cancelable: true
			}
		);
	};

	return (
		<View style={styles.container}>
			<View style={styles.cardContainer}>
				<FlatList
					data={workoutType}
					renderItem={({ item }) =>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(item.route, item)}
						>
							<ScrollView>
								<Card
									style={styles.cardStyle}
									borderRadius={20}
								>
									<CardImage
										source={item.image}
										title={item.route}
										style={styles.cardImage}
									/>
								</Card>
							</ScrollView>
						</TouchableOpacity>}
				/>
				<TouchableOpacity
					style={styles.logoutButton}
					onPress={() => logout()}
				>
					<Text style={styles.logoutButtonText}>Logout</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#787878"
	},
	cardContainer: {
		marginTop: 40,
	},
	cardStyle: {
		flex: 1,
		width: 320,
		height: "100%",
		elevation: 3,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "#333",
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginTop: 40,
		borderRadius: 20,
		marginTop: 40
	},
	logoutButton: {
		backgroundColor: "#212121",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		paddingVertical: 20,
		paddingHorizontal: 40,
		marginTop: 55,
		borderRadius: 30,
		elevation: 2,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "#333",
		shadowOpacity: 1.3,
		shadowRadius: 30,
		width: 200,
		position: "relative",
		bottom: 40
	},
	logoutButtonText: {
		fontWeight: "bold",
		fontSize: 15,
		textTransform: "uppercase",
		color: "#fff"
	}
});
