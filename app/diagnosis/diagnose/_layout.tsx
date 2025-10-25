import { Stack } from "expo-router";

export default function DiagnosisLayout(){
    return (
	<Stack
	    screenOptions={{
		headerShown : false
	    }}
	>
	    <Stack.Screen
		name="[options]"
		options={{
		    title : "Assessment",
		}}
	    />
	</Stack>
    );
}
