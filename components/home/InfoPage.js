import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function InfoPage({ navigation }) {
    return (
        <>
            <View style={styles.menuContainer}>
                <View style={styles.menuRow}>
                    <View styles={styles.menuItem}>
                        <Button
                            title='Icon'
                            onPress={() => navigation.navigate("Glossary")}
                        />
                        <Text style={styles.menuItemText}>Glossary</Text>
                    </View>
                    <View styles={styles.menuItem}>
                        <Button
                            title='Icon'
                            onPress={() => navigation.navigate("ContactUs")}
                        />
                        <Text style={styles.menuItemText}>Contact us</Text>
                    </View>
                </View>
                <View style={styles.menuRow}>
                    <View styles={styles.menuItem}>
                        <Button
                            title='Icon'
                            onPress={() => navigation.navigate("MoreInfo")}
                        />
                        <Text style={styles.menuItemText}>More Info</Text>
                    </View>
                    <View styles={styles.menuItem}>
                        <Button
                            title='Icon'
                            onPress={() => navigation.navigate("Credits")}
                        />
                        <Text style={styles.menuItemText}>Credits</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        display: "flex",
        flexDirection: "column",
        margin: 25,
        textAlign: "center",
        width: "100%"
    },
    menuRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5
    },
    menuItem: {
        fontSize: 18,
        textAlign: "center"
    },
    menuItemText: {
        fontSize: 18
    }
});
