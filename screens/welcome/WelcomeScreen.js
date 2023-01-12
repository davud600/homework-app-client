import { Button, Linking, StyleSheet, Text, View } from "react-native";

const REGISTER_LINK = "https://google.com";

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <Button
                title='Login'
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title='Register'
                onPress={() => Linking.openURL(REGISTER_LINK)}
            />
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
