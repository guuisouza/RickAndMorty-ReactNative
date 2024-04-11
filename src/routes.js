import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/login';

const Stack = createStackNavigator();

export default function Routes() {
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
        </Stack.Navigator>
    </NavigationContainer>
}