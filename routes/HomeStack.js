import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import Header from '../components/Header';
import Login from '../components/Login';
import ChestStack from '../routes/ChestStack';
import BackStack from '../routes/BackStack';
import TricepStack from '../routes/TricepStack';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
    <Navigator initialRouteName='Login'
        headerMode="screen"
        screenOptions={{
            cardStyle: {
                backgroundColor: '#fff'
            },
            headerStyle: {
                backgroundColor: '#fff',
                height: 80,
                elevation: 0
            },
            headerTitleStyle: {
                color: '#3189DB',
                fontFamily: 'nunito-bold',
                fontSize: 30,
                textAlign: 'center'
            },
            headerTintColor: 'black'
        }}
    >

        <Screen 
            name="Login"
            component={Login}
        />

        <Screen
            name='Home'
            component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title='Choose your workout' />
            }}
        />

        <Screen
            name='Chest'
            component={ChestStack}
            options={{
                title: 'Chest + Bicep',
                headerShown: false
            }}
        />

        <Screen
            name='Back'
            component={BackStack}
            options={{
                title: 'Back + Shoulder',
                headerShown: false
            }}
        />

        <Screen
            name='Tricep'
            component={TricepStack}
            options={{
                title: 'Tricep',
                headerShown: false
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