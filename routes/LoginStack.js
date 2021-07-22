import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../components/Login";

const { Navigator, Screen } = createStackNavigator();

export const LoginStack = ({ navigation }) => {
	<Navigator
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
				color: "white",
				fontFamily: "nunito-bold"
			},
			headerTintColor: "white"
		}}
	>
		<Screen
			name="Login"
			component={Login}
		/>
	</Navigator>;
};

export default LoginStack;
