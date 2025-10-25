import { Text, View,ScrollView, StyleSheet } from "react-native";
import { CardGraphic } from "@/components/card-graphic";
import { CardView } from "@/components/card-view";
import { DiagnosisSymptoms } from "@/components/diagnosis-symptoms";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { symptoms } from "@/constants/data";

export default function DiagnosisIndex(){
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	    <ScrollView contentContainerStyle={styles.contentContainer} className={className.diagnosisContainer}>
		<CardGraphic href="/category/virus/seasonal" src="/image.png" title="This Month" subtitle="Seasonal Virus"/>
		<DiagnosisSymptoms options={symptoms} assessHref="/diagnosis/diagnose/[options]"/>
		<CardView title="Common Ailments" href="/category/tips">
		</CardView>
		<CardView title="Seasonal Virus" href="/category/tips">
		</CardView>
	    </ScrollView>
	</SafeAreaView>
    );
}
const options = [
    { optgroup : "Head", options : ["Dizzy", "Nausea"]},
    { optgroup : "Body", options : ["Pain", "Swell"]}
];

const className = {
    diagnosisContainer : "p-4 flex flex-col gap-4"
};
const styles = StyleSheet.create({
  contentContainer: {   
	gap : 14
  }
});
