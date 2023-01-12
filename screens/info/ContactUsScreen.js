import { StyleSheet, Text, View } from "react-native";
import { useAppData } from "../../context/AppData";
import InfoScreensLayout from "./InfoScreensLayout";

function ContactUsContent() {
    return (
        <>
            <Text></Text>
        </>
    );
}

export default function ContactUsScreen({ navigation }) {
    const { INFO_PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <InfoScreensLayout
                title={INFO_PAGES.CONTACT_US}
                ScreenContent={ContactUsContent}
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
    }
});
