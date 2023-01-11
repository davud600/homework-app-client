import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useAppData } from "../context/AppData";
import Navbar from "../components/Navbar";
import Page from "../components/Page";

import HomePage from "../components/home/HomePage";
import SearchPage from "../components/home/SearchPage";
import InfoPage from "../components/home/InfoPage";
import ProfilePage from "../components/home/ProfilePage";

export default function HomeScreen({ navigation }) {
    const appData = useAppData();
    const { PAGES } = appData;
    const [renderPage, setRenderPage] = useState(PAGES.HOME);
    const ContentPages = [HomePage, SearchPage, InfoPage, ProfilePage];

    return (
        <View style={styles.container}>
            {Object.keys(PAGES).map((key, index) => {
                return renderPage === PAGES[key] ? (
                    <Page
                        title={PAGES[key]}
                        PageContent={ContentPages[index]}
                        navigation={navigation}
                    />
                ) : (
                    <></>
                );
            })}

            <Navbar renderPage={renderPage} setRenderPage={setRenderPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    }
});
