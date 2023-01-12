import React from "react";
import { View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useAppData } from "../context/AppData";
import ScreenLayout from "./ScreenLayout";

function SearchContent() {
    return (
        <>
            <SafeAreaView style={styles.searchFieldContainer}>
                <TextInput
                    style={styles.searchField}
                    placeholder='Search...'
                    keyboardType='text'
                />
            </SafeAreaView>
        </>
    );
}

export default function SearchScreen() {
    const { PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <ScreenLayout title={PAGES.SEARCH} ScreenContent={SearchContent} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },

    searchFieldContainer: {
        width: "100%",
        margin: 20
    },

    searchField: {
        fontSize: 18,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});
