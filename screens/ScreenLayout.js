import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScreenLayout({
    title,
    ScreenContent,
    navigation = null
}) {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.screenTitle}>{title}</Text>
            <ScreenContent navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 40,
        flex: 0.75,
        width: "70%",
        justifyContent: "start",
        alignItems: "center"
    },

    screenTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 15,
        marginLeft: -45,
        alignSelf: "start"
    }
});
