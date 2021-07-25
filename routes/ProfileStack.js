import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../components/Profile";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = ({ navigation }) => {
    <Navigator
        headerMode="screen"
    >
        <Screen
            name="Profile"
            component={Profile}
        />
    </Navigator>
};

export default ProfileStack;