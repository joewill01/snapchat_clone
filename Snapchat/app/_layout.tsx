import { Stack } from "expo-router";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import CameraPage from './camera_page';
import ChatsPage from "./chats_page";
import Navigation from "./navigation";


export default function RootLayout() {
  return (
    <View style={styles.container}>
      <ChatsPage />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingBottom: 108
  }
})
