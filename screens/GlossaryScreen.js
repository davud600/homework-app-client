import { useState } from "react";
import {
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Page from "../components/Page";
import { useContentData } from "../context/ContentData";

function GlossaryPage() {
    const [highlightedText, setHighlightedText] = useState(-1);
    const { contentData } = useContentData();
    const { GLOSSARY_LIST } = contentData;
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

export default function GlossaryScreen() {
    return (
        <View style={styles.container}>
            <Page title='Glossary' PageContent={GlossaryPage} />
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
