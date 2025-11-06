import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold,
} from '@expo-google-fonts/play';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .catch(() => {
      });
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
        .then(() => {
          setAppIsReady(true);
        })
        .catch(() => {
          setAppIsReady(true);
        });
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
        <StatusBar style="light" />
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
