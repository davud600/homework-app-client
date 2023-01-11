import React from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import glossaryIcon from "../../assets/info/icons/glossary-icon.png";
import contactUsIcon from "../../assets/info/icons/contact-us-icon.png";
import moreInfoIcon from "../../assets/info/icons/more-info-icon.png";
import creditsIcon from "../../assets/info/icons/credits-icon.png";

export default function InfoPage({ navigation }) {
    return (
        <>
            <View style={styles.menuContainer}>
                <View style={styles.menuRow}>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Glossary")}>
                            <Image style={styles.icon} source={glossaryIcon} />
                            <Text style={styles.menuItemText}>Glossary</Text>
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ContactUs")}>
                            <Image style={styles.icon} source={contactUsIcon} />
                            <Text style={styles.menuItemText}>Contact us</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.menuRow}>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("MoreInfo")}>
                            <Image style={styles.icon} source={moreInfoIcon} />
                            <Text style={styles.menuItemText}>More info</Text>
                        </TouchableOpacity>
                    </View>
                    <View styles={styles.menuItem}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Credits")}>
                            <Image style={styles.icon} source={creditsIcon} />
                            <Text style={styles.menuItemText}>Credits</Text>
                        </TouchableOpacity>
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
    },
    icon: {
        width: 50,
        height: 50,
        margin: 5
    }
});
