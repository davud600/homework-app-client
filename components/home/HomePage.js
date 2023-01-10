import React from "react";
import { View } from "react-native";
import { Bar } from "react-native-progress";
import { useContentData } from "../../context/ContentData";
import List from "../List";

const totalProgress = 0.25;
const progressBarfillColor = "rgba(0, 0, 0, 0.5)";
const progressBarBorderColor = "black";
const progressBarBorderWidth = 2;
const progressBarHeight = 24;
const progressBarWidth = 270;
const progressBarBorderRadius = 0;

export default function HomePage() {
    const { contentData } = useContentData();
    const { NEWS_LIST_DATA, RESOURCES_LIST_DATA } = contentData;

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
