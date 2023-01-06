import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HomePage from "../components/home/HomePage";
import InfoPage from "../components/home/InfoPage";
import Page from "../components/home/Page";
import ProfilePage from "../components/home/ProfilePage";
import SearchPage from "../components/home/SearchPage";
import Navbar from "../components/Navbar";

const BACKGROUND_COLOR = "#fff";

const PAGES = {
    HOME: "Home",
    SEARCH: "Search",
    INFO: "Info",
    PROFILE: "Profile"
};

export default function HomeScreen({ navigation }) {
    const [renderPage, setRenderPage] = useState(PAGES.HOME);

    return (
        <View style={styles.container}>
            {renderPage === PAGES.HOME ? (
                <Page title={PAGES.HOME} PageContent={HomePage} />
            ) : (
                <></>
            )}
            {renderPage === PAGES.SEARCH ? (
                <Page title={PAGES.SEARCH} PageContent={SearchPage} />
            ) : (
                <></>
            )}
            {renderPage === PAGES.INFO ? (
                <Page title={PAGES.INFO} PageContent={InfoPage} />
            ) : (
                <></>
            )}
            {renderPage === PAGES.PROFILE ? (
                <Page title={PAGES.PROFILE} PageContent={ProfilePage} />
            ) : (
                <></>
            )}
            <Navbar
                navigation={navigation}
                PAGES={PAGES}
                renderPage={renderPage}
                setRenderPage={setRenderPage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        alignItems: "center"
    }
});
