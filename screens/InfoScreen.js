import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useAppData } from "../context/AppData";
import ScreenLayout from "./ScreenLayout";

import glossaryIcon from "../assets/info/icons/glossary-icon.png";
import contactUsIcon from "../assets/info/icons/contact-us-icon.png";
import moreInfoIcon from "../assets/info/icons/more-info-icon.png";
import creditsIcon from "../assets/info/icons/credits-icon.png";

function InfoContent({ navigation }) {
    const { INFO_PAGES } = useAppData();

    // make this with a map loop
    return (
        <>
            <View style={styles.menuContainer}>
                <View style={styles.menuRow}>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(INFO_PAGES.GLOSSARY)
                            }>
                            <Image style={styles.icon} source={glossaryIcon} />
                            <Text style={styles.menuItemText}>Glossary</Text>
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(INFO_PAGES.CONTACT_US)
                            }>
                            <Image style={styles.icon} source={contactUsIcon} />
                            <Text style={styles.menuItemText}>Contact us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.menuRow}>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(INFO_PAGES.MORE_INFO)
                            }>
                            <Image style={styles.icon} source={moreInfoIcon} />
                            <Text style={styles.menuItemText}>More info</Text>
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(INFO_PAGES.CREDITS)
                            }>
                            <Image style={styles.icon} source={creditsIcon} />
                            <Text style={styles.menuItemText}>Credits</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}

export default function InfoScreen({ navigation }) {
    const { PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <ScreenLayout
                title={PAGES.INFO}
                ScreenContent={InfoContent}
                navigation={navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },

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
    },
    icon: {
        width: 50,
        height: 50,
        margin: 5
    }
});
