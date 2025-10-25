import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { CardView } from "@/components/card-view";
import { CardGraphic } from "@/components/card-graphic";

export default function Home(){
    return (
	<ScrollView className={className.home}>
	    <View className={className.body_header}>
		<Link href="/medicine" className={className.header_button}>Medicine</Link>
		<Link href="/diagnosis" className={className.header_button}>Diagnosis</Link>
	    </View>
	    <View className={className.main_body}>
	    <CardGraphic href="/category/virus/seasonal" src="/image.png" title="This Month" subtitle="Seasonal Virus"/>
		{/* <CardView title="Health Profile"> */}
		{/*     <Text>ta</Text> */}
		{/* </CardView> */}
		<CardView title="Health Tips" href="/category/tips">
		    <Text>ta</Text>
		</CardView>
	    </View>
	</ScrollView>
    );
}

const className = {
    home : "px-3 py-2",
    body_header : "flex flex-row px-2 py-3 gap-4 mb-2 justify-stretch",
    header_button : "text-stone-700 font-bold text-[16px] px-2 py-5 bg-[#C9E3D0] rounded-[6px] flex-1 text-center",
    main_body : ""
};
