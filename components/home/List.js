import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { ListItem } from "./ListItem";

export default function List({ title, DATA }) {
    return (
        <SafeAreaView style={styles.listContainer}>
            <Text style={styles.listTitle}>{title}</Text>
            <FlatList
                style={styles.list}
                data={DATA}
                renderItem={({ item }) => <ListItem item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        height: 170,
        width: "100%",
        borderWidth: "2px",
        marginTop: 50
    },
    listTitle: {
        fontSize: "25px",
        alignSelf: "center",
        marginTop: 10
    },
    list: {
        margin: 10
    }
});
