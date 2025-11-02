import { Stack } from "expo-router";
import { View,Text } from "react-native";
export default function Layout(){
    return (
	<Stack
	>
	    <Stack.Screen
		name = "Virus"
		options={{
		    headerShown : true
		}}
	    />
	    <Stack.Screen
		name = "tips"
		options={{
		    title : "Health Tips"
		}}
	    />
	</Stack>
    );
}
