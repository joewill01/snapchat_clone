import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import MyAppText from '../components/my_app_text';

export default function ChatsPage() {
    return (
        <View style={styles.container}>
            <MyAppText style={styles.title}>Chat</MyAppText>

            <View style={styles.chatContainer}>
                <MyAppText style={styles.chatName}>Steve</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <MyAppText style={styles.chatName}>Marshall 👀</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <MyAppText style={styles.chatName}>Will</MyAppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#121212",
        paddingTop: 110
    },

    title: {
        width: "100%",
        textAlign: "center",
        color: "#dedede",
        fontSize: 20,
        fontWeight: 600,
        position: "absolute",
        top: 70
    },

    chatContainer: {
        width: "100%",
        height: 70,
        borderTopWidth: 1,
        borderColor: "#292929",
        position: "relative"
    },

    chatName: {
        position: "absolute",
        top: 12,
        left: 40,
        fontWeight: 500,
        color: "#dedede"
    }
})