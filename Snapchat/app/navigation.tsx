import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function Navigation(props) {
    return (
        <View style={styles.container}>
            <Pressable>
                <Image source={require(props.selected == 'map'?'../assets/images/tab-bar-icons/map-selected.png':'../assets/images/tab-bar-icons/map.png')} />
            </Pressable>
            <Pressable>
                <Image source={require(props.selected == 'chats'?'../assets/images/tab-bar-icons/chat-selected.png':'../assets/images/tab-bar-icons/chat.png')} />
            </Pressable>
            <Pressable>
                <Image source={require(props.selected == 'camera'?'../assets/images/tab-bar-icons/camera-selected.png':'../assets/images/tab-bar-icons/camera.png')} />
            </Pressable>
            <Pressable>
                <Image source={require(props.selected == 'friends'?'../assets/images/tab-bar-icons/friends-selected.png':'../assets/images/tab-bar-icons/friends.png')} />
            </Pressable>
            <Pressable>
                <Image source={require(props.selected == 'play'?'../assets/images/tab-bar-icons/play-selected.png':'../assets/images/tab-bar-icons/play.png')} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 108,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#1e1e1e",
        borderTopWidth: 1,
        borderColor: "#404040",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: 28,
        paddingLeft: 14,
        paddingRight: 14
    }
})