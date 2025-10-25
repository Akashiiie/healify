import { Stack } from "expo-router";
import { View,Text } from "react-native";
export default function Layout(){
    return (
	<Stack
	    screenOptions={{
		headerShown : false
	    }}
	>
	    <Stack.Screen
		name = "virus"
	    />
	    <Stack.Screen
		name = "tips"
	    />
	</Stack>
    );
}
