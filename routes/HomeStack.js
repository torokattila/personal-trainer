import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Signup from "../components/Signup";
import SignupStack from "../routes/SignupStack";
import ChestStack from "../routes/ChestStack";
import BackStack from "../routes/BackStack";
import TricepStack from "../routes/TricepStack";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) =>
	<Navigator
		initialRouteName="Login"
		headerMode="screen"
		screenOptions={{
			cardStyle: {
				backgroundColor: "#fff"
			},
			headerStyle: {
				backgroundColor: "#fff",
				height: 120,
				elevation: 0
			},
			headerTitleStyle: {
				color: "#3189DB",
				fontFamily: "nunito-bold",
				fontSize: 30,
				textAlign: "center"
			},
			headerTintColor: "black"
		}}
	>
		<Screen name="Login" component={Login} />

		<Screen
			name="Signup"
			component={Signup}
			options={{
				headerTitleStyle: {
					color: "#3189DB",
					fontFamily: "nunito-bold",
					fontSize: 30,
					textAlign: "center",
					marginRight: 60
				}
			}}
		/>

		<Screen
			name="Home"
			component={Home}
			options={{
				title: "Chest + Bicep",
				headerShown: false
			}}
		/>

		<Screen
			name="Profile"
			component={Profile}
			options={{
				headerTitleStyle: {
					color: "#1976D2",
					fontFamily: "nunito-bold",
					fontSize: 30,
					textAlign: "center",
					marginRight: 60
				},
				headerStyle: {
					backgroundColor: "#fff",
					height: 120,
					elevation: 0,
				},
				headerTintColor: "#1976D2"
			}}
		/>

		<Screen
			name="Chest"
			component={ChestStack}
			options={{
				title: "Chest + Bicep",
				headerShown: false
			}}
		/>

		<Screen
			name="Back"
			component={BackStack}
			options={{
				title: "Back + Shoulder",
				headerShown: false
			}}
		/>

		<Screen
			name="Tricep"
			component={TricepStack}
			options={{
				title: "Tricep",
				headerShown: false
			}}
		/>
	</Navigator>;

export const AppNavigator = () =>
	<NavigationContainer>
		<HomeStack />
	</NavigationContainer>;

export default AppNavigator;
