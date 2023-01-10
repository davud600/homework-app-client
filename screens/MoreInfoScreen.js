import { StyleSheet, Text, View } from "react-native";

export default function MoreInfoScreen() {
    return (
        <View style={styles.container}>
            <Text>More info</Text>
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
