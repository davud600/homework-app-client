import { StyleSheet, Text, View } from "react-native";
import Page from "../../components/Page";
import { useAppData } from "../../context/AppData";
import InfoScreensLayout from "./InfoScreensLayout";

function MoreInfoContent() {
    return (
        <>
            <Text></Text>
        </>
    );
}

export default function MoreInfoScreen({ navigation }) {
    const { INFO_PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <InfoScreensLayout
                title={INFO_PAGES.MORE_INFO}
                ScreenContent={MoreInfoContent}
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
