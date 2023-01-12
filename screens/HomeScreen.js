import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Bar } from "react-native-progress";
import List from "../components/List";
import { useAppData } from "../context/AppData";
import { useContentData } from "../context/ContentData";
import ScreenLayout from "./ScreenLayout";

function HomeContent() {
    const { NEWS_LIST_DATA, RESOURCES_LIST_DATA } = useContentData();

    const totalProgress = 0.25;
    const progressBarfillColor = "rgba(0, 0, 0, 0.5)";
    const progressBarBorderColor = "black";
    const progressBarBorderWidth = 2;
    const progressBarHeight = 24;
    const progressBarWidth = 270;
    const progressBarBorderRadius = 0;

    return (
        <>
            <View>
                <Bar
                    borderWidth={progressBarBorderWidth}
                    borderRadius={progressBarBorderRadius}
                    width={progressBarWidth}
                    height={progressBarHeight}
                    color={progressBarfillColor}
                    borderColor={progressBarBorderColor}
                    progress={totalProgress}
                />
            </View>
            <List DATA={NEWS_LIST_DATA} title={"News"} />
            <List DATA={RESOURCES_LIST_DATA} title={"Useful Resources"} />
        </>
    );
}

export default function HomeScreen() {
    const { PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <ScreenLayout title={PAGES.HOME} ScreenContent={HomeContent} />
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
