import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return <GestureHandlerRootView>
        <Stack screenOptions={{
            headerShown:false,
            statusBarBackgroundColor:'#292929',
        }}>
            
        </Stack>
    </GestureHandlerRootView>
}