import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signup from "../components/Signup";

const { Navigator, Screen } = createStackNavigator();

export const SignupStack = ({ navigation }) => {
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
			name="Signup"
			component={Signup}
		/>
	</Navigator>;
};

export default SignupStack;
