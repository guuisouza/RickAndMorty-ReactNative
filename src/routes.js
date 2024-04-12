import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import Register from './pages/register';
import Cards from './pages/cards';
import CardsDetails from './pages/cardsDetails';

const Stack = createStackNavigator();

export default function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        title: 'LOGIN',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#03DBCA',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{
                        title: 'CADASTRO',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#03DBCA',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    }}
                />
                <Stack.Screen
                    name="cards"
                    component={Cards}
                    options={{
                        title: 'Rick And Morty CARDS',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#03DBCA',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    }}
                />
                <Stack.Screen
                    name="cardsDetails"
                    component={CardsDetails}
                    options={{
                        title: 'DETALHES',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#03DBCA',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#fff',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}