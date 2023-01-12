import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppData } from "../context/AppData";
import { StatusBar } from "react-native";

import WelcomeScreen from "./welcome/WelcomeScreen";
import LoginScreen from "./welcome/LoginScreen";

import HomeScreensContainer from "./HomeScreensContainer";

const Stack = createNativeStackNavigator();

export default function MainContainer() {
    const { PAGES } = useAppData();

    return (
        <>
            <StatusBar hidden />
            <NavigationContainer>
                <Stack.Navigator independent={true}>
                    <Stack.Screen name={"Welcome"} component={WelcomeScreen} />
                    <Stack.Screen name={"Login"} component={LoginScreen} />
                    <Stack.Screen
                        name={PAGES.HOME}
                        component={HomeScreensContainer}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
