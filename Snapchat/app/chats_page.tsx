import { Text, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import MyAppText from '../components/my_app_text';

export default function ChatsPage(props) {
    return (
        <ScrollView style={[styles.container, props.style]}showsVerticalScrollIndicator={false}>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/steve.png')} />
                <MyAppText style={styles.chatName}>Steve</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/recieved-opened--chat.png')} />
                <MyAppText style={styles.status}>Recieved  ·  20h</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/marshall.png')} />
                <MyAppText style={styles.chatName}>Marshall </MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--chat.png')} />
                <MyAppText style={styles.status}>Delivered  ·  39s</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/will.png')} />
                <MyAppText style={styles.chatName}>Will</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--video.png')} />
                <MyAppText style={styles.status}>Delivered  ·  25m</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/marshall.png')} />
                <MyAppText style={styles.chatName}>Marshall </MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--chat.png')} />
                <MyAppText style={styles.status}>Delivered  ·  39s</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/will.png')} />
                <MyAppText style={styles.chatName}>Will</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--video.png')} />
                <MyAppText style={styles.status}>Delivered  ·  25m</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/marshall.png')} />
                <MyAppText style={styles.chatName}>Marshall </MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--chat.png')} />
                <MyAppText style={styles.status}>Delivered  ·  39s</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/will.png')} />
                <MyAppText style={styles.chatName}>Will</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--video.png')} />
                <MyAppText style={styles.status}>Delivered  ·  25m</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/marshall.png')} />
                <MyAppText style={styles.chatName}>Marshall </MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--chat.png')} />
                <MyAppText style={styles.status}>Delivered  ·  39s</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/will.png')} />
                <MyAppText style={styles.chatName}>Will</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--video.png')} />
                <MyAppText style={styles.status}>Delivered  ·  25m</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/marshall.png')} />
                <MyAppText style={styles.chatName}>Marshall </MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--chat.png')} />
                <MyAppText style={styles.status}>Delivered  ·  39s</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/will.png')} />
                <MyAppText style={styles.chatName}>Will</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--video.png')} />
                <MyAppText style={styles.status}>Delivered  ·  25m</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/marshall.png')} />
                <MyAppText style={styles.chatName}>Marshall </MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--chat.png')} />
                <MyAppText style={styles.status}>Delivered  ·  39s</MyAppText>
            </View>
            <View style={styles.chatContainer}>
                <Image style={styles.bitmoji} source={require('../assets/images/bitmojis/will.png')} />
                <MyAppText style={styles.chatName}>Will</MyAppText>
                <Image style={styles.statusGlyph} source={require('../assets/images/chat-status/sent-delivered--video.png')} />
                <MyAppText style={styles.status}>Delivered  ·  25m</MyAppText>
            </View>
        </ScrollView>
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
        height: 66,
        borderTopWidth: 1,
        borderColor: "#222",
        position: "relative"
    },

    bitmoji: {
        position: "absolute",
        top: 9,
        left: 9,
    },

    chatName: {
        position: "absolute",
        top: 14,
        left: 67,
        fontWeight: 500,
        fontSize: 17,
        color: "#dedede"
    },

    statusGlyph: {

        position: "absolute",
        top: 40,
        left: 67,
    },

    status: {
        position: "absolute",
        top: 39,
        left: 87,
        fontWeight: 500,
        fontSize: 11,
        color: "#999"
    }
})