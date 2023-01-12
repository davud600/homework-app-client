import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useAppData } from "../context/AppData";
import { useContentData } from "../context/ContentData";
import ScreenLayout from "./ScreenLayout";

function TasksPart({ tasksPart, navigation }) {
    const { TASKS_PAGES } = useAppData();

    return (
        <TouchableOpacity
            style={styles.partContainer}
            onPress={() => navigation.navigate(TASKS_PAGES.TASKS_PART_ONE)}>
            <Text style={styles.partTitle}>{tasksPart.title}</Text>
            <Text style={styles.partDescription}>{tasksPart.description}</Text>
        </TouchableOpacity>
    );
}

function TasksContent({ navigation }) {
    const { TASK_PARTS } = useContentData();

    return (
        <>
            <View style={styles.partsContainer}>
                {TASK_PARTS.map(tasksPart => (
                    <TasksPart
                        key={tasksPart.title}
                        tasksPart={tasksPart}
                        navigation={navigation}
                    />
                ))}
            </View>
        </>
    );
}

export default function TasksScreen({ navigation }) {
    const { PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <ScreenLayout
                title={PAGES.TASKS}
                ScreenContent={TasksContent}
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
