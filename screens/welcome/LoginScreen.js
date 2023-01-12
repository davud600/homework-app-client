import { Button, StyleSheet, Text, View } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login Page!</Text>
            <Button
                title='Submit'
                onPress={() => navigation.navigate("Home")}
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
