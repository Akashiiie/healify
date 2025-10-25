import { Stack } from "expo-router";

export default function MedicineLayout(){
    return (
	<Stack screenOptions={{
	    headerShown : false
	}}>
	    <Stack.Screen
		name = "index"
	    />
	    <Stack.Screen
		name = "search"
	    />
	    <Stack.Screen
		name = "[data]"
	    />
	</Stack>
    );
}
