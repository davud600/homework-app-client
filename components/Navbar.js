import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function Navbar({ PAGES, renderPage, setRenderPage }) {
    const pagesGroupOne = [];
    const pagesGroupTwo = [];
    const keyArr = Object.keys(PAGES);

    keyArr.forEach((key, index) => {
        if (index >= keyArr.length / 2) return;
        pagesGroupOne[index] = PAGES[key];
    });
    keyArr.reverse().forEach((key, index) => {
        if (index >= keyArr.length / 2) return;
        pagesGroupTwo[index] = PAGES[key];
    });

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.pagesGroup}>
                {pagesGroupOne.map(page => (
                    <View
                        style={[
                            styles.navbarButtonContainer,
                            renderPage === page &&
                                styles.navbarButtonContainerActive
                        ]}>
                        <Button
                            color='black'
                            title={page}
                            onPress={() => setRenderPage(page)}
                        />
                    </View>
                ))}
            </View>
            <View style={styles.pagesGroup}>
                {pagesGroupTwo.map(page => (
                    <View
                        style={[
                            styles.navbarButtonContainer,
                            renderPage === page &&
                                styles.navbarButtonContainerActive
                        ]}>
                        <Button
                            color='black'
                            title={page}
                            onPress={() => setRenderPage(page)}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarContainer: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderWidth: 2
    },

    pagesGroup: {
        display: "flex",
        flexDirection: "row"
    },

    navbarButtonContainer: {
        width: 75,
        height: 60,
        justifyContent: "center"
    },

    navbarButtonContainerActive: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
});
