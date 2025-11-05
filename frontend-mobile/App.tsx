import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold,
} from '@expo-google-fonts/play';
import Header from './src/components/Header';
import Home from './src/pages/Home';

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
    <View style={styles.container}>
      <Header/>
      <Home/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1F34',
  }
});
