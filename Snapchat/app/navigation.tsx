import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function Navigation() {
    return (
        <View style={styles.container}>
            <Pressable>
                <Image source={require('../assets/images/tab-bar-icons/map.png')} />
            </Pressable>
            <Pressable>
                <Image source={require('../assets/images/tab-bar-icons/chat.png')} />
            </Pressable>
            <Pressable>
                <Image source={require('../assets/images/tab-bar-icons/camera-selected.png')} />
            </Pressable>
            <Pressable>
                <Image source={require('../assets/images/tab-bar-icons/friends.png')} />
            </Pressable>
            <Pressable>
                <Image source={require('../assets/images/tab-bar-icons/play.png')} />
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