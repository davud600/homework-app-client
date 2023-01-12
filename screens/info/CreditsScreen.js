import { StyleSheet, Text, View } from "react-native";
import { useAppData } from "../../context/AppData";
import { useContentData } from "../../context/ContentData";
import InfoScreensLayout from "./InfoScreensLayout";

function CreditsContent() {
    const { CREDITS } = useContentData();

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

export default function CreditsScreen({ navigation }) {
    const { INFO_PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <InfoScreensLayout
                title={INFO_PAGES.CREDITS}
                ScreenContent={CreditsContent}
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
