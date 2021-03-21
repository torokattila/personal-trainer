import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Back from '../components/Back';

const { Navigator, Screen } = createStackNavigator();

export const BackStack = ({ navigation }) => (
    <Navigator
        headerMode='screen'
        screenOptions={{
            headerStyle: {
                backgroundColor: '#212121',
                height: 120
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold'
            },
            headerTintColor: 'white'
        }}
    >

        <Screen
            name='Back'
            component={Back}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Back + Shoulder' type='workoutHeader' />
            }}
        />
    </Navigator>
);

export default BackStack;