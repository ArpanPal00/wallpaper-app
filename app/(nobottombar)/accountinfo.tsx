import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function AccountInfo() {
    return <SafeAreaView>
        <Text>Account Info</Text>
        <Stack.Screen options={{headerShown:true, headerTitle:"Account Info", headerBackTitle:"Go Back"}} />
    </SafeAreaView>
}