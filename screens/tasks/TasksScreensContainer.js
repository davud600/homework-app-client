import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { useAppData } from "../../context/AppData";

import TasksScreen from "../TasksScreen";
import TasksPartScreen from "./TasksPartScreen";

const Stack = createNativeStackNavigator();

export default function TasksScreensContainer() {
    const { PAGES, TASKS_PAGES } = useAppData();

    return (
        <>
            <StatusBar hidden />
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={PAGES.TASKS} component={TasksScreen} />
                    <Stack.Screen
                        name={TASKS_PAGES.TASKS_PART_ONE}
                        component={TasksPartScreen}
                    />
                    <Stack.Screen
                        name={TASKS_PAGES.TASKS_PART_TWO}
                        component={TasksPartScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
