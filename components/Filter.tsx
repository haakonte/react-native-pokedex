import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { Modal } from 'react-native-router-flux';
import { FloatingAction } from "react-native-floating-action";

const actions = [
    {
      text: "Accessibility",
      icon: require('../assets/favicon.png'),
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      icon: require('../assets/favicon.png'),
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      icon: require('../assets/favicon.png'),
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      icon: require('../assets/favicon.png'),
      name: "bt_videocam",
      position: 4
    }
  ];

const styles = StyleSheet.create({
    button: {
        bottom: 5,
        top: 10,
        position: "absolute"
        
    }
})

export const Filter = () => {
    
    return (
        <View style={styles.button}>
            <FloatingAction
            actions={actions}
            onPressMain={() => console.log("sheesh")}
            onPressItem={name => {
                console.log(`selected button: ${name}`);
            }}
            />
        </View>
    )
    
}