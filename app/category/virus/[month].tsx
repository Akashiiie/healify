import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function MonthView(){
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	    <ScrollView>
		<View>
		    <Text></Text>
		    <Text></Text>
		</View>
		<View>
		    <Text></Text>
		</View>
	    </ScrollView>
	</SafeAreaView>
    )
}
