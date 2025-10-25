import { useLocalSearchParams } from "expo-router";
import { Image,View,Text,ScrollView } from "react-native";
export default function MedicineIndex(){
    const { data : data_string } = useLocalSearchParams();
    const data = JSON.parse(data_string);
    return (
	<ScrollView className={className.medicineContainer}>
	    <View className={className.imageContainer}>
		<Image src={""} className={className.image}/>
	    </View>
	    <View>
		<View className={className.titleContainer}>
		    <Text className={className.title}>{data.name}</Text>
		</View>
		<View className={className.informationContainer}>
		    <View className={className.descriptionContainer}>
			<Text className={className.descriptionTitle}>Description</Text>
			<Text className={className.description}>{data.description}</Text>
		    </View>
		</View>
	    </View>
	</ScrollView>
    );
}

const className = {
    medicineContainer : "",
    imageContainer : "h-[52vh] border-b",
    image : "h-full",
    titleContainer : "px-3 py-3",
    title : "text-[34px] font-bold",
    informationContainer : "p-3",
    descriptionContainer : "",
    descriptionTitle : "text-[17px] font-bold",
    description : "p-3",
}
