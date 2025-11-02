import { virus } from "@/constants/data";
import { MonthCardView } from "@/components/month-card-view";
import { View, Text, ScrollView, Pressable,StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CommonPage(){
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	    <ScrollView style={styles.commonView} contentContainerStyle={styles.commonContentView}>
		{virus.map((item,index) => (<Text key={index}>{item.name}</Text>))}
	    </ScrollView>
	</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    commonView : {
	padding : 8,
    },
    commonContentView : {
	rowGap : 8,
	paddingBottom : 12,
    },
});
