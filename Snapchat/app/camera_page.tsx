import { Text, View, Button, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
import { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';


export default function CameraPage() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<Boolean>(false);

  const [permission, requestPermission] = useCameraPermissions();
  let camera: Camera;


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleCameraFlash() {
    setFlash(!flash);
  }

  const takePicture = async() => {
    const photo = await camera.takePictureAsync()
  }

  let lastPress=0;

  function viewfinderPress() {
    if ((lastPress + 500) > Date.now()) {
      toggleCameraFacing();
    }
    lastPress = Date.now();
  }


  return (
    <View style={styles.container}>
      <Pressable style={styles.cameraContainer} onPress={viewfinderPress}>
        <CameraView ref={(r) => {camera = r}} style={styles.camera} facing={facing} flash='on' mode='video'>

        </CameraView>
      </Pressable>

        <View style={styles.cameraSettingsContainer}>
           <TouchableOpacity onPress={toggleCameraFacing}>
            <Image source={require('../assets/images/camera-icons/flip-camera.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../assets/images/camera-icons/flash.png')} />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Image source={require('../assets/images/camera-icons/sounds.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../assets/images/camera-icons/selfie-settings.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraSettingsContainer: {
    position: "absolute",
    top: 80,
    right: 0,
    gap: 20,
    display: "flex",
    alignItems: "center",
    width: 60
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    overflow: "hidden",
    backgroundColor: "black"
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },

  cameraContainer: {
    width: "100%",
    height: "100%"
  },
  camera: {
    flex: 1,
    marginTop: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 55
  },
  button: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "white"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
