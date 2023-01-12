import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useAppData } from "../context/AppData";
import { useContentData } from "../context/ContentData";
import ScreenLayout from "./ScreenLayout";

function TaskPart({ taskPart }) {
    return (
        <TouchableOpacity style={styles.partContainer}>
            <Text style={styles.partTitle}>{taskPart.title}</Text>
            <Text style={styles.partDescription}>{taskPart.description}</Text>
        </TouchableOpacity>
    );
}

function TasksContent() {
    const { TASK_PARTS } = useContentData();

    return (
        <>
            <View style={styles.partsContainer}>
                {TASK_PARTS.map(taskPart => (
                    <TaskPart key={taskPart.title} taskPart={taskPart} />
                ))}
            </View>
        </>
    );
}

export default function TasksScreen() {
    const { PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <ScreenLayout title={PAGES.TASKS} ScreenContent={TasksContent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },

    partsContainer: {
        width: "90%"
    },
    partContainer: {
        borderWidth: 2,
        width: "100%",
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        alignItems: "center"
    },
    partTitle: {
        fontSize: 22,
        margin: 10
    },
    partDescription: {
        marginTop: 10
    }
});
