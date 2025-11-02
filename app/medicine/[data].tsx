import { useLocalSearchParams } from "expo-router";
import { View,Text,ScrollView } from "react-native";
import { Image } from "expo-image";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function MedicineIndex(){
    const { data : data_string } = useLocalSearchParams();
    const data = JSON.parse(data_string);
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	    <ScrollView className={className.medicineContainer} style={{paddingBottom : 8}}>
		<View className={className.imageContainer}>
		    <Image source={{uri : data.image}} className={className.image} style={{width : "100%", height : "100%"}}/>
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
			<View className={className.descriptionContainer}>
			    <Text className={className.descriptionTitle}>Usage</Text>
			    <Text className={className.description}>{data.usage}</Text>
			</View>
		    </View>
		</View>
	    </ScrollView>
	</SafeAreaView>
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
    descriptionTitle : "text-[24px] font-bold",
    description : "p-3 text-[18px]",
}
