import { StyleSheet, Text, View } from "react-native";

export default function CreditsScreen() {
    return (
        <View style={styles.container}>
            <Text>Credits</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
