import { Stack } from "expo-router";

export default function MedicineLayout(){
    return (
	<Stack
	    screenOptions={{
		headerShown : true,
		title : "Medicine"
	    }}
	>
	    <Stack.Screen
		name = "index"
	    />
	    <Stack.Screen
		name = "[data]"
	    />
	</Stack>
    );
}
