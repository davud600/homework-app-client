import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAppData } from "../context/AppData";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import TasksScreensContainer from "./tasks/TasksScreensContainer";
import InfoScreensContainer from "./info/InfoScreensContainer";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function HomeScreensContainer() {
    const { PAGES } = useAppData();

    return (
        <>
            <StatusBar hidden />
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    initialRouteName={PAGES.HOME}
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            let rn = route.name;

                            if (rn === PAGES.HOME) {
                                iconName = focused ? "home" : "home-outline";
                            } else if (rn === PAGES.SEARCH) {
                                iconName = focused
                                    ? "search"
                                    : "search-outline";
                            } else if (rn === PAGES.TASKS) {
                                iconName = focused ? "list" : "list-outline";
                            } else if (rn === PAGES.INFO) {
                                iconName = focused
                                    ? "settings"
                                    : "settings-outline";
                            } else if (rn === PAGES.PROFILE) {
                                iconName = focused ? "" : "";
                            }

                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    })}>
                    <Tab.Screen name={PAGES.HOME} component={HomeScreen} />
                    <Tab.Screen name={PAGES.SEARCH} component={SearchScreen} />
                    <Tab.Screen
                        name={PAGES.TASKS}
                        component={TasksScreensContainer}
                    />
                    <Tab.Screen
                        name={PAGES.INFO}
                        component={InfoScreensContainer}
                    />
                    <Tab.Screen
                        name={PAGES.PROFILE}
                        component={ProfileScreen}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
