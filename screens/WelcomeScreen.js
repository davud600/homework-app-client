import { Button, StyleSheet, Text, View } from "react-native";

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
                onPress={() => navigation.navigate("Register")}
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
