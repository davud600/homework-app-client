import { StyleSheet, Text, View } from "react-native";
import Page from "../components/Page";

function ContactUsPage() {
    return (
        <>
            <Text></Text>
        </>
    );
}

export default function ContactUsScreen() {
    return (
        <View style={styles.container}>
            <Page title='Contact us' PageContent={ContactUsPage} />
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
