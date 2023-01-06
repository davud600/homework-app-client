import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Bar } from "react-native-progress";
import List from "./List";

const NEWS_LIST_DATA = [
    {
        id: "1",
        title: "First News Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "2",
        title: "Second News Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "3",
        title: "Third News Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "4",
        title: "Fourth News Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "5",
        title: "Fifth News Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    }
];

const RESOURCES_LIST_DATA = [
    {
        id: "1",
        title: "First Resources Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "2",
        title: "Second Resources Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "3",
        title: "Third Resources Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "4",
        title: "Fourth Resources Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    },
    {
        id: "5",
        title: "Fifth Resources Item",
        // imageSrc: require("../assets/adaptive-icon.png"),
        newsLink: "https://google.com"
    }
];

const totalProgress = 0.25;
const progressBarfillColor = "rgba(0, 0, 0, 0.5)";
const progressBarBorderColor = "black";
const progressBarBorderWidth = 2;
const progressBarHeight = 24;
const progressBarWidth = 270;
const progressBarBorderRadius = 0;

export default function HomePage() {
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
                    style={styles.totalProgressBar}
                    progress={totalProgress}
                />
            </View>
            <List DATA={NEWS_LIST_DATA} title={"News"} />
            <List DATA={RESOURCES_LIST_DATA} title={"Useful Resources"} />
        </>
    );
}

const styles = StyleSheet.create({
    newsContainer: {
        height: 170,
        width: "100%",
        borderWidth: "2px",
        marginTop: 50
    },

    resourcesContainer: {
        height: 300,
        width: "100%",
        borderWidth: "2px",
        marginTop: 50
    }
});
