import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page({ title, PageContent }) {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.pageTitle}>{title}</Text>
            <PageContent />
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 0.75,
        width: "70%",
        justifyContent: "start",
        alignItems: "center"
    },

    pageTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 15,
        marginLeft: -45,
        alignSelf: "start"
    }
});
