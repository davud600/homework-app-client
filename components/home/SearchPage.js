import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function SearchPage() {
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

const styles = StyleSheet.create({
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
