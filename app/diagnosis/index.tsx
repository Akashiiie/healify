import { CardGraphic } from "@/components/card-graphic";
import { CardView } from "@/components/card-view";
import { DiagnosisSymptoms } from "@/components/diagnosis-symptoms";
import { symptoms } from "@/constants/data";
import { useRouter } from "expo-router";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Pressable
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function DiagnosisIndex(){
    const router = useRouter();
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	    <ScrollView contentContainerStyle={styles.contentContainer} className={className.diagnosisContainer}>
		<CardGraphic href="/category/virus/seasonal" source={require("@/assets/images/virus.png")} title="This Month" subtitle="Seasonal Virus">
		    <Pressable className={className.graphicButton}>
			<Text className={className.graphicButtonText}>Gonorrhea</Text>
		    </Pressable>
		</CardGraphic>
		<DiagnosisSymptoms options={symptoms} assessHref="/diagnosis/diagnose/[options]"/>
	    </ScrollView>
	</SafeAreaView>
    );
}

const className = {
    diagnosisContainer : "p-4 flex flex-col gap-4",
    graphicButton : "rounded-2xl p-2 border flex items-center mx-3",
    graphicButtonText : "text-[16px] font-bold",
};
const styles = StyleSheet.create({
  contentContainer: {   
	gap : 14,
	paddingBottom : 22,
  }
});
