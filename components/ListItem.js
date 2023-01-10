import { StyleSheet, Text, View } from "react-native";

export function ListItem({ item }) {
    const { title, imageSrc, link } = item;

    return (
        <View
            style={styles.itemContainer}
            onPress={() => link && Linking.openURL(link)}>
            <Text style={styles.itemTitle}>- {title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 5,
        marginBottom: 5
    },
    itemTitle: {
        fontSize: "15px"
    }
});
