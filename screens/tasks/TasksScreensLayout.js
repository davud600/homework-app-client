import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useAppData } from "../../context/AppData";
import ScreenLayout from "../ScreenLayout";

export default function TasksScreensLayout({
    title,
    ScreenContent,
    navigation = null
}) {
    const { PAGES } = useAppData();

    return (
        <>
            <ScreenLayout
                title={title}
                ScreenContent={ScreenContent}
                navigation={navigation}
            />
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate(PAGES.TASKS)}>
                <Text style={styles.buttonText}>back</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        top: 100,
        left: 50
    },
    buttonText: {
        fontSize: 24
    }
});
