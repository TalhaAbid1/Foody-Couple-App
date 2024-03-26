import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../screens/welcome';
import { InAppStack } from "./stacks/InAppStack";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="InAppStack" component={InAppStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}