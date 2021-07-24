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
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

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
			</View>

			<View style={styles.profileLogoutContainer}>
				<View style={styles.profileSide}>
					<TouchableOpacity>
						<AntDesign
							name="user"
							size={27}
							color="#fff"
							style={{ left: 2 }}
						/>
						<Text style={{ color: "#fff", fontSize: 11 }}>
							Profile
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.logoutSide}>
					<TouchableOpacity onPress={() => logout()}>
						<MaterialIcons
							name="logout"
							size={27}
							color="#fff"
							style={{ left: 5 }}
						/>
						<Text style={{ color: "#fff", fontSize: 11 }}>
							Logout
						</Text>
					</TouchableOpacity>
				</View>
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
		marginTop: 40
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
		borderRadius: 20,
		marginTop: 40
	},
	profileLogoutContainer: {
		position: "absolute",
		backgroundColor: "#212121",
		width: "100%",
		bottom: 0,
		height: 60,
		flexDirection: "row-reverse",
		flex: 1
	},
	profileSide: {
		position: "absolute",
		right: 100,
		bottom: 5
	},
	logoutSide: {
		position: "absolute",
		left: 105,
		bottom: 5
	}
});
