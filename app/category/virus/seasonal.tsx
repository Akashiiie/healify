import { monthly_virus } from "@/constants/data";
import { MonthCardView } from "@/components/month-card-view";
import { View, Text, ScrollView, Pressable,StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SeasonalPage(){
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	    <ScrollView style={styles.seasonalView} contentContainerStyle={styles.seasonalContentView}>
		{
		    Object.entries(monthly_virus)
			.map(
			    ([month,virus],index) => (
				<MonthCardView key={index} title={month}><Text style={{color : "#48EFA9",fontWeight : 700 ,fontSize : 20, lineHeight : 20}}>{virus.name}</Text></MonthCardView>
			    )
			)
		}
	    </ScrollView>
	</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    seasonalView : {
	padding : 8,
	height : "100%",
    },
    seasonalContentView : {
	rowGap : 8,
	paddingBottom : 12,
    },
});
