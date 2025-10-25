import { View, Text,ScrollView,Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { medicine_list } from "@/constants/data";

function AssessDiagnosis({symptoms}){
    const router = useRouter();
    const filtered = (Object.entries(symptoms).map(([group,options]) => {
	const trueEntries = Object.entries(options).filter(([k,v]) => v==true); 
	if (trueEntries.length != 0){
	    return [group,trueEntries.map(([k,v]) => k)];
	}
	return false;
    }).filter((e) => e != false));
    const symptomsCount = filtered.reduce((acc, curr) => (acc + Object.entries(curr).length), 0);
    if(symptomsCount >= 8){
	return <View><Text>You seem to be having a lot of symptoms, it will be better to see your doctor.</Text></View>;
    }

    const recommendations = medicine_list.filter((meds) => {
	const usedFor = meds.usedFor;
	return meds.availability.overTheCounter && usedFor.some((usedForSymptom) => {
	    return filtered.some(([group,symptoms]) => (group == usedForSymptom.optgroup && symptoms.some((symptom) => usedForSymptom.options.includes(symptom))));
	});
    });
    if (recommendations.length != 0)
	return (
	    <View className={className.assessment}>
		<Text className={className.assessmentHeader}>Recommended Over The Counter Medicine</Text>
		{recommendations.map((e,i) => 
		    (<Pressable
			key ={i}
			onPress={
			    () => router.navigate({
				pathname : "/medicine/[data]",
				params : { "data" : JSON.stringify(e) }
			    })
			}
			className={className.recommendation}
		    >
			<Text className={className.recommendationName}>{e.name}</Text>
		    </Pressable>
		    ))}
	    </View>
	);
    return <View><Text>No medicine found for your symptoms, you should see a doctor.</Text></View>;
}
export default function DiagnosePage(){
    const { options : options_string } = useLocalSearchParams();
    const options = JSON.parse(options_string);
    return (
	<SafeAreaView edges={["bottom","left","right"]}>
	    <ScrollView>
		<AssessDiagnosis symptoms={options}/>
	    </ScrollView>
	</SafeAreaView>
    );
}

const className = {
    optgroupHeader : "",
    optgroupTitle : "",
    optionsContainer : "p-2 px-4",
    assessment : "p-4",
    assessmentHeader : "text-2xl font-bold",
    recommendationName : "text-[18px]",
    recommendation : "p-4"
}
