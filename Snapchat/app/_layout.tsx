import { Stack } from "expo-router";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';
import CameraPage from './camera_page';
import ChatsPage from "./chats_page";
import Navigation from "./navigation";


export default function RootLayout() {
  const [activePage, setActivePage] = useState('camera');

  return (
    <View style={styles.container}>
      {activePage=='camera' ? <CameraPage /> : <></>}
      {activePage=='chats' ? <ChatsPage /> : <></>}
      <Navigation selected={activePage} onButtonClick={(button: string) => {setActivePage(button)}}/>
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
