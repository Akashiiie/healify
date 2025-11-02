import { View, Text, Pressable } from "react-native";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import { type ComponentProps, useState } from 'react';

type GroupData = { optgroup : string, options : string[]}
type Props = ComponentProps<typeof View> & {assessHref : string, options : Array<GroupData>}
function OptGroup({groupData, optionState, optionHandler, assessHref} : ComponentProps<typeof View> & {groupData : GroupData,optionState: any, optionHandler : (key : any, value : any) => void}){
    return (
	<View className={className.optgroupContainer}>
	    <View>
		<Text className={className.optgroupTitle}>{groupData.optgroup}</Text>
	    </View>
	    <View className={className.optionsContainer}>
		{
		    groupData.options.map(
			(option : string, index) => (
			    <View key={index} className={className.option}>
				<Checkbox value={optionState[groupData.optgroup][option]} onValueChange={(value) => optionHandler(groupData.optgroup,option,value)} />
				<Text>{option}</Text>
			    </View>
			)
		    )
		}
	    </View>
	</View>
    );
}
export function DiagnosisSymptoms({options,assessHref} : Props){
    const router = useRouter();
    const [optionsState, setOptions] = useState(Object.fromEntries(options.map((optgroup) => [optgroup.optgroup, Object.fromEntries(optgroup.options.map((option) => [option,false]))])));
    function setOptionState(group,key,value){
	setOptions({
	    ...optionsState,
	    [group] : {
		...optionsState[group],
		[key] : value
	    }
	})
    }
    return (
	<View className={className.symptomsContainer}>
	    <View>
	    	<Text className={className.symptomsHeader}>Your Symptoms</Text>
	    </View>
	    <View>
		{options.map((optgroup,index) => <OptGroup optionState={optionsState} optionHandler={setOptionState} key={index} groupData={optgroup}/>)}
	    </View>
	    <View className={className.assessBtnContainer}>
		<Pressable
		    onPress={
			() => {
			    if (
				Object.entries(optionsState).some(([optgroup, symptoms]) => Object.entries(symptoms).some(([symptom,flag]) => flag))
			    ){
				router.navigate({
				    pathname : assessHref,
				    params : { options : JSON.stringify(optionsState) }
				});
			    }
			}
		    }
		    className={className.assessBtn}
		>
		    <Text className={className.assessBtnText}>Assess</Text>
		</Pressable>

	    </View>
	</View>
    );
}

const className = {
    symptomsContainer : "border rounded-3xl px-6 py-8",
    symptomsHeader : "text-[28px] font-bold py-2",
    optgroupContainer : "px-1 py-2",
    optgroupTitle : "text-xl font-bold",
    option : "flex flex-row gap-2",
    optionsContainer : "py-2 px-4 flex flex-row flex-wrap gap-4",
    assessBtnContainer : "flex flex-row flex-wrap justify-end mt-4",
    assessBtn : "bg-[#B2E9D6] p-[8px] rounded-[6px]",
    assessBtnText : "text-[16px] font-bold text-grey py-[2px] px-2"
}
