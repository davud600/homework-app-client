import { Button, StyleSheet, Text, View } from "react-native";

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Register Page!</Text>
            <Button
                title='Submit'
                onPress={() => navigation.navigate("Login")}
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
