import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { useAppData } from "../../context/AppData";

import InfoScreen from "../InfoScreen";
import GlossaryScreen from "./GlossaryScreen";
import ContactUsScreen from "./ContactUsScreen";
import MoreInfoScreen from "./MoreInfoScreen";
import CreditsScreen from "./CreditsScreen";

const Stack = createNativeStackNavigator();

export default function InfoScreensContainer() {
    const { PAGES, INFO_PAGES } = useAppData();

    return (
        <>
            <StatusBar hidden />
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={PAGES.INFO} component={InfoScreen} />
                    <Stack.Screen
                        name={INFO_PAGES.GLOSSARY}
                        component={GlossaryScreen}
                    />
                    <Stack.Screen
                        name={INFO_PAGES.CONTACT_US}
                        component={ContactUsScreen}
                    />
                    <Stack.Screen
                        name={INFO_PAGES.MORE_INFO}
                        component={MoreInfoScreen}
                    />
                    <Stack.Screen
                        name={INFO_PAGES.CREDITS}
                        component={CreditsScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
