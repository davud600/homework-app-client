import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InfoPage() {
    return (
        <>
            <View style={styles.menuColumn}>
                <View style={styles.menuRow}>
                    <Text>Glossary</Text>
                    <Text>Contact us</Text>
                </View>
                <View style={styles.menuRow}>
                    <Text>More Info</Text>
                    <Text>Credits</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    menuColumn: {
        display: "flex",
        flexDirection: "column"
    },
    menuRow: {
        display: "flex",
        flexDirection: "row"
    }
});
