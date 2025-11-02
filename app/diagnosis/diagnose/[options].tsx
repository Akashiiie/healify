import { View, Text, ScrollView,Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
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
	return (
	    <View style={{ padding : 12 }}>
		<Text style={{fontSize : 24, fontWeight : 500}}>You seem to be experiencing a lot of symptoms, you should see your local doctor.</Text>
	    </View>);
    }

    const recommendations = medicine_list.filter((meds) => {
	const usedFor = meds.usedFor;
	return meds.availability.overTheCounter && usedFor.some((usedForSymptom) => {
	    return filtered.some(([group,symptoms]) => (group == usedForSymptom.optgroup && symptoms.some((symptom) => usedForSymptom.options.includes(symptom))));
	});
    });
    if (recommendations.length != 0)
	return (
		<View style={{borderWidth : 1, borderColor : "black", borderRadius : 12, padding : 14, paddingVertical : 18, marginTop : 8}}>
		<Text className={className.assessmentHeader}>Recommended Over The Counter Medicine{recommendations.length >= 2 && "s" || ""}</Text>
		{recommendations.map((e,i) => 
		    (<Pressable
			key ={i}
			onPress={
			    () => {
				e.image = Asset.fromModule(e.image).uri;
				return router.push({
				    pathname : "/medicine/[data]",
				    params : { "data" : JSON.stringify(e) }
				});
			    }
			}
			className={className.recommendation}
		    >
			
			<View className={className.assessmentItemImageContainer}>
			    <Image source={e.image} style={{ width: 96, height: 96 }}/>
			</View>
			<View className={className.assessmentItemTextContainer}>
			    <Text className={className.recommendationName} style={{}}>{e.name}</Text>
			</View>
		    </Pressable>
		    ))}
	    </View>
	);
    return (
	<View style={{ padding : 14 }}>
	    <Text style={{fontSize : 24, fontWeight : 500}}>No medicine found for your symptoms, if you're feeling under the weather you should see your local doctor.</Text>
	</View>);
}
export default function DiagnosePage(){
    const { options : options_string } = useLocalSearchParams();
    const options = JSON.parse(options_string);
    const symptoms = Object.fromEntries(
	Object.entries(options)
	    .map(
		([name,symptoms]) => [name,Object.entries(symptoms).reduce((last,[name,flag]) => flag && [...last,name] || last,[])]
	    )
	    .filter(
		([name,symptoms]) => symptoms.length > 0
	    )
    );
    return (
	<SafeAreaView edges={["bottom","left","right"]}>
	    <ScrollView style={{paddingVertical : 8, paddingHorizontal : 14}} contentContainerStyle={{paddingBottom:32}}>
		<View style={{borderWidth : 1, borderColor : "black", borderRadius : 12, padding : 12, paddingTop : 14, paddingBottom : 24}}>
		    <View>
			<Text style={{paddingVertical : 12, paddingHorizontal : 4, fontSize: 32, fontWeight : 500}}>You're experiencing</Text>
		    </View>
		    <View style={{paddingHorizontal : 14}}>
			{
			    Object.entries(symptoms).map(
				([title, symptoms],index) => (
				    <View key={index}>
					<View>
					    <Text style={{fontSize : 25, fontWeight : 500}}>{title}</Text>
					</View>
					<View style={{paddingHorizontal : 12, paddingVertical : 4}}>
					    {symptoms.map((name,index) => (
						<View key={index}>
						    <Text style={{fontSize : 20}}>{name}</Text>
						</View>
					    ))}
					</View>
				    </View>

				)
			    )
			}
		    </View>
		</View>
		<AssessDiagnosis symptoms={options}/>
	    </ScrollView>
	</SafeAreaView>
    );
}

const className = {
    optgroupHeader : "",
    optgroupTitle : "",
    optionsContainer : "p-2 px-4",
    assessment : "py-3 px-4",
    assessmentHeader : "p-1 mt-1 mb-2 text-[30px] font-bold",
    recommendationName : "text-[22px] font-bold",
    recommendation : "p-4 flex flex-row",
    assessmentItemTextContainer : "flex justify-center p-4",
}
