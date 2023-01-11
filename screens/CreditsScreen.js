import { StyleSheet, Text, View } from "react-native";
import Page from "../components/Page";
import { useContentData } from "../context/ContentData";

function CreditsPage() {
    const { contentData } = useContentData();
    const { CREDITS } = contentData;

    return (
        <>
            {CREDITS.map((credit, index) => (
                <View key={index} style={styles.creditContainer}>
                    <Text style={styles.creditText}>{credit}</Text>
                </View>
            ))}
        </>
    );
}

export default function CreditsScreen() {
    return (
        <View style={styles.container}>
            <Page title='Credits' PageContent={CreditsPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    creditContainer: {
        width: "80%",
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: "start"
    },
    creditText: {
        fontSize: 18
    }
});
