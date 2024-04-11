import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/homeScreen';
import RecipeDetails from '../../screens/recipeDetailScreen';

const InApp = createNativeStackNavigator()

export const InAppStack = () => {
    return (
        <InApp.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <InApp.Screen name='Home' component={Home} />
            <InApp.Screen name='RecipeDetails' component={RecipeDetails} />
        </InApp.Navigator>
    )
}
