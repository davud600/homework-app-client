import { StyleSheet, Text, View } from "react-native";

export default function ContactUsScreen() {
    return (
        <View style={styles.container}>
            <Text>Contact us</Text>
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
