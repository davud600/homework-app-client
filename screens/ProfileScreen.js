import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppData } from "../context/AppData";
import ScreenLayout from "./ScreenLayout";

function ProfileContent() {
    return <></>;
}

export default function ProfileScreen() {
    const { PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <ScreenLayout
                title={PAGES.PROFILE}
                ScreenContent={ProfileContent}
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
