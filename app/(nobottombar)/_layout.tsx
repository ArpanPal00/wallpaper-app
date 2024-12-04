import { Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    return <SafeAreaView>
        <View style={{backgroundColor:"black"}}>
        </View>
        <Slot />
    </SafeAreaView>
}