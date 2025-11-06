import React from "react";
import { Text, StyleSheet } from "react-native";
import Header from "../../components/Header";

export default function CreateRecord () {

    return (
        <>
            <Header/>
            <Text style={styles.text}>Record Page</Text>
        </>
        
    );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
  }
});