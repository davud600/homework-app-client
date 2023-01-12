import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAppData } from "../../context/AppData";
import TasksScreensLayout from "./TasksScreensLayout";

function TasksPartContent() {
    return (
        <>
            <Text>slkdfjsdklfj</Text>
        </>
    );
}

export default function TasksPartScreen({ navigation }) {
    const { TASKS_PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <TasksScreensLayout
                title={TASKS_PAGES.TASKS_PART_ONE}
                ScreenContent={TasksPartContent}
                navigation={navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    }
});
