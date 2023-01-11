import { StyleSheet, Text, View } from "react-native";
import Page from "../components/Page";

function MoreInfoPage() {
    return (
        <>
            <Text></Text>
        </>
    );
}

export default function MoreInfoScreen() {
    return (
        <View style={styles.container}>
            <Page title='More Info' PageContent={MoreInfoPage} />
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
