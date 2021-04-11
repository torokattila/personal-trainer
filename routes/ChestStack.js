import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Chest from '../components/Chest';

const { Navigator, Screen } = createStackNavigator();

export const ChestStack = ({ navigation }) => (
    <Navigator
        headerMode='screen'
        screenOptions={{
            cardStyle: {
                backgroundColor: '#2196F3'
            },
            headerStyle: {
                backgroundColor: '#2196F3',
                height: 120,
                elevation: 0,
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold',
            },
            headerTintColor: 'white',
        }}
        
    >

        <Screen
            name='Chest'
            component={Chest}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Chest + Bicep' type='workoutHeader' />
            }}
        />
    </Navigator>
);

export default ChestStack;