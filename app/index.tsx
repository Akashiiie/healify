import { Link,useRouter } from "expo-router";
import { View, Text, ScrollView, Pressable } from "react-native";
import { CardView } from "@/components/card-view";
import { CardGraphic } from "@/components/card-graphic";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { current_month, monthly_virus } from "@/constants/data";
import { Image } from "expo-image";
import { useState } from 'react';

export default function Home(){
    const [virus,setVirus] = useState(monthly_virus[current_month]);
    const router = useRouter();
    return (
	<SafeAreaView edges={['bottom','left','right']} >
	<ScrollView className={className.home} contentContainerStyle={{paddingBottom : 16}}>
		{/* two buttons */}
	    <View className={className.body_header}>
		<Link href="/medicine" className={className.header_button}>Medicine</Link>
		<Link href="/diagnosis" className={className.header_button}>Diagnosis</Link>
	    </View>

		{/* main body */}
	    <View className={className.main_body}>


		    {/* This Month */}
		<CardGraphic href="/category/virus/seasonal" source={require("@/assets/images/virus.png")} title="This Month" subtitle="Seasonal Virus" className="mb-4">
		    <Pressable
			    className={className.graphicButton}
			    onPress={
				() => router.push({
				    pathname : "/category/virus/[month]",
				})
			    }
			>
			<Text className={className.graphicButtonText}>{virus.name}</Text>
		    </Pressable>
		</CardGraphic>

		    {/* Seasonal Card View */}
		<CardView title="Seasonal Virus" href="/category/virus/seasonal">
		    <Pressable onPress={() => router.push("/category/virus/seasonal")}>
			<View style={{height:220, borderRadius : 12,overflow : "hidden"}}>
			    <Image source={require("@/assets/images/seasonal.png")} style={{height:"100%",objectFit:"scale-down"}}/>
			</View>
		    </Pressable>
		</CardView>
	    </View>
	</ScrollView>
	</SafeAreaView>
    );
}

const className = {
    home : "px-3 py-2",
    body_header : "flex flex-row px-2 py-3 gap-5 mb-2 justify-stretch",
    header_button : "text-[#052405] font-bold text-[16px] px-2 py-5 bg-[#7DFD9C] rounded-[12px] flex-1 text-center",
    main_body : "",
    health_tips : "mt-2 rounded-2xl",
    health_tips_content : "flex-grow h-[200px]",
    graphicButton : "rounded-2xl p-2 border flex items-center mx-3",
    graphicButtonText : "text-[16px] font-bold",
};
