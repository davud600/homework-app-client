import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAppData } from "../context/AppData";

const homeIcon = "../assets/navbar/icons/home-icon.png";
const searchIcon = "../assets/navbar/icons/search-icon.png";
const infoIcon = "../assets/navbar/icons/info-icon.png";
const profileIcon = "../assets/navbar/icons/profile-icon.png";

function NavbarItem({ page, renderPage, setRenderPage }) {
    const { PAGES } = useAppData();

    return (
        <View
            style={[
                styles.navbarButtonContainer,
                renderPage === page && styles.navbarButtonContainerActive
            ]}>
            <TouchableOpacity
                style={styles.navbarButton}
                onPress={() => setRenderPage(page)}>
                {page === PAGES.HOME ? (
                    <Image
                        style={styles.navbarLinkIcon}
                        source={require(homeIcon)}
                    />
                ) : page === PAGES.SEARCH ? (
                    <Image
                        style={styles.navbarLinkIcon}
                        source={require(searchIcon)}
                    />
                ) : page === PAGES.INFO ? (
                    <Image
                        style={styles.navbarLinkIcon}
                        source={require(infoIcon)}
                    />
                ) : page === PAGES.PROFILE ? (
                    <Image
                        style={styles.navbarLinkIcon}
                        source={require(profileIcon)}
                    />
                ) : (
                    <></>
                )}
            </TouchableOpacity>
        </View>
    );
}

export default function Navbar({ renderPage, setRenderPage }) {
    const { PAGES } = useAppData();
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
    pagesGroupTwo.reverse();

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.pagesGroup}>
                {pagesGroupOne.map((page, index) => (
                    <NavbarItem
                        key={index}
                        page={page}
                        renderPage={renderPage}
                        setRenderPage={setRenderPage}
                    />
                ))}
            </View>
            <View style={styles.pagesGroup}>
                {pagesGroupTwo.map((page, index) => (
                    <NavbarItem
                        key={index}
                        page={page}
                        renderPage={renderPage}
                        setRenderPage={setRenderPage}
                    />
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
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },

    navbarButtonContainerActive: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },

    navbarButton: {
        padding: 18
    },

    navbarLinkIcon: {
        width: 25,
        height: 25
    }
});
