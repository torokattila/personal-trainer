import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Tricep from '../components/Tricep';

const { Navigator, Screen } = createStackNavigator();

export const TricepStack = ({ navigation }) => (
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
            name='Tricep'
            component={Tricep}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Tricep' type='workoutHeader' />
            }}
        />
    </Navigator>
);

export default TricepStack;