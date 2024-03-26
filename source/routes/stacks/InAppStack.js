import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/homeScreen';

const InApp = createNativeStackNavigator()

export const InAppStack = () => {
    return (
        <InApp.Navigator screenOptions={{ headerShown: false }}>
            <InApp.Screen name='Home' component={Home} />
        </InApp.Navigator>
    )
}
