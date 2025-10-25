import { Stack } from "expo-router";

export default function DiagnosisLayout(){
    return (
	<Stack
	    screenOptions={{
		headerShown : false
	    }}
	>
	    <Stack.Screen
		name="index"
	    />
	    <Stack.Screen
		name="diagnose"
		options={{
		    title : "Assessment",
		}}
	    />
	</Stack>
    );
}
