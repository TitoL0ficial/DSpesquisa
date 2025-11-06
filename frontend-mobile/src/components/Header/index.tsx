import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../types/navigation";

export default function Header () {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  function handleOnPress () {
    navigation.navigate('Home');
  }

    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" backgroundColor="#37474F" />
        <Pressable onPress={handleOnPress}>
          <View style={styles.header}>
              <Image source={require('../../assets/logo.png')}/>
              <Text style={styles.textLogo1}>Big Game</Text>
              <Text style={styles.textLogo2}>Survey</Text>
          </View>
        </Pressable>   
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#37474F',
  },
  header: {
    height: 50,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo1: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: "Play_700Bold",
    color: '#ED7947',
    marginLeft: 10,
    marginRight: 5,
  },
  textLogo2: {
    fontWeight: 'bold',
    fontFamily: "Play_700Bold",
    fontSize: 18,
    color: '#FFF'
  },
});