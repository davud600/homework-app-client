import { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useAppData } from "../../context/AppData";
import { useContentData } from "../../context/ContentData";
import InfoScreensLayout from "./InfoScreensLayout";

function GlossaryContent() {
    const [highlightedText, setHighlightedText] = useState(-1);
    const { GLOSSARY_LIST } = useContentData();
    GLOSSARY_LIST.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <>
            <SafeAreaView>
                <FlatList
                    style={styles.glossaryList}
                    data={GLOSSARY_LIST}
                    renderItem={({ item }) => {
                        return item.id === highlightedText ? (
                            <View style={styles.glossaryViewContainer}>
                                <Text style={styles.glossaryViewTitle}>
                                    {item.title}
                                </Text>
                                <Text>{item.paragraph1}</Text>
                                <Text>{item.paragraph2}</Text>
                            </View>
                        ) : (
                            <TouchableOpacity
                                onPress={() => setHighlightedText(item.id)}>
                                <Text style={styles.glossaryItem}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    );
}

export default function GlossaryScreen({ navigation }) {
    const { INFO_PAGES } = useAppData();

    return (
        <View style={styles.container}>
            <InfoScreensLayout
                title={INFO_PAGES.GLOSSARY}
                ScreenContent={GlossaryContent}
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
    },
    glossaryList: {
        marginTop: 10,
        minWidth: "80%"
    },
    glossaryItem: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        color: "black"
    },
    glossaryViewContainer: {
        backgroundColor: "black",
        width: "100%",
        minHeight: 100,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "white"
    },
    glossaryViewTitle: {
        fontSize: 21,
        marginBottom: 10
    }
});
