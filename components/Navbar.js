import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function Navbar({ PAGES, renderPage, setRenderPage }) {
    return (
        <View style={styles.navbarContainer}>
            <View style={styles.pagesGroup}>
                <View
                    style={[
                        styles.navbarButtonContainer,
                        renderPage === PAGES.HOME &&
                            styles.navbarButtonContainerActive
                    ]}>
                    <Button
                        color='black'
                        title='Home'
                        onPress={() => setRenderPage(PAGES.HOME)}
                    />
                </View>
                <View
                    style={[
                        styles.navbarButtonContainer,
                        renderPage === PAGES.SEARCH &&
                            styles.navbarButtonContainerActive
                    ]}>
                    <Button
                        color='black'
                        title='Search'
                        onPress={() => setRenderPage(PAGES.SEARCH)}
                    />
                </View>
            </View>
            <View style={styles.pagesGroup}>
                <View
                    style={[
                        styles.navbarButtonContainer,
                        renderPage === PAGES.INFO &&
                            styles.navbarButtonContainerActive
                    ]}>
                    <Button
                        color='black'
                        title='?'
                        onPress={() => setRenderPage(PAGES.INFO)}
                    />
                </View>
                <View
                    style={[
                        styles.navbarButtonContainer,
                        renderPage === PAGES.PROFILE &&
                            styles.navbarButtonContainerActive
                    ]}>
                    <Button
                        color='black'
                        title='Profile'
                        onPress={() => setRenderPage(PAGES.PROFILE)}
                    />
                </View>
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
