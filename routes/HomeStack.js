import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import Header from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
    <Navigator initialRouteName='Home'
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#212121',
                height: 120,
            },
            headerTitleStyle: {
                color: 'white',
                fontFamily: 'nunito-bold',
                fontSize: 25,
                textAlign: 'center'
            },
            headerTintColor: 'white'
        }}
    >

        <Screen
            name='Home'
            component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Choose your workout' />
            }}
        />

    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeStack />
    </NavigationContainer>
);

export default AppNavigator;