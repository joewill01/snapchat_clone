import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export interface Props {
    selected: string,
    onButtonClick: Function
}

export default function Navigation(props: Props) {

    return (
        <View style={styles.container}>
            <Pressable>
                {props.selected == 'map' ? 
                    <Image source={require('../assets/images/tab-bar-icons/map-selected.png')} />
                :
                    <Image source={require('../assets/images/tab-bar-icons/map.png')} />
                }
            </Pressable>
            <Pressable onPress={() => {props.onButtonClick("chats")}}>
                {props.selected == 'chats' ? 
                    <Image source={require('../assets/images/tab-bar-icons/chat-selected.png')} />
                :
                    <Image source={require('../assets/images/tab-bar-icons/chat.png')} />
                }
            </Pressable>
            <Pressable onPress={() => {props.onButtonClick("camera")}}>
                {props.selected == 'camera' ? 
                    <Image source={require('../assets/images/tab-bar-icons/camera-selected.png')} />
                :
                    <Image source={require('../assets/images/tab-bar-icons/camera.png')} />
                }
            </Pressable>
            <Pressable>
                {props.selected == 'friends' ? 
                    <Image source={require('../assets/images/tab-bar-icons/friends-selected.png')} />
                :
                    <Image source={require('../assets/images/tab-bar-icons/friends.png')} />
                }
            </Pressable>
            <Pressable>
                {props.selected == 'play' ? 
                    <Image source={require('../assets/images/tab-bar-icons/play-selected.png')} />
                :
                    <Image source={require('../assets/images/tab-bar-icons/play.png')} />
                }
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