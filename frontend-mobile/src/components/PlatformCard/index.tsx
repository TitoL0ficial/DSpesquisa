import React from "react";
import { FontAwesome6 as Icon } from '@expo/vector-icons';
import { StyleSheet, Text } from "react-native";
import { GamePlatform } from "../../types/platform";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    platform: GamePlatform;
    onChange: (platform: GamePlatform) => void;
    icon: string;
    activePlatform?: GamePlatform;
}

export default function PlatformCard ( { 
    platform, 
    onChange, 
    icon,
    activePlatform
} : Props ) {

    const isActive = platform === activePlatform;
    const backgroundColor = isActive ? '#ff9b70ff' : '#fff';
    const textColor = isActive ? '#ff4d00ff' : '#9e9e9e';

    return (
        <RectButton 
            style={[styles.platformCard, { backgroundColor }]}
            onPress={() => onChange(platform)}
        >
            <Icon name={icon} size={60} color={textColor}/>
            <Text style={[styles.platformCardText, {color: textColor}]}>
                {platform === 'PLAYSTATION' ? 'PS' : platform}
            </Text>
        </RectButton>            
    );
}

const styles = StyleSheet.create({
  platformCard: {
    paddingTop: 30,
    paddingBottom: 20,
    width: '30%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  platformCardText: {
    marginTop: 10,
    color: '#9E9E9E',
    fontSize: 20,
    fontFamily: "Play_700Bold",
    textAlign: 'center'
  },
});