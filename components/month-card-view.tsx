import type { ComponentProps, ReactElement } from "react";
import { View, Text } from "react-native";
import { Href, Link } from "expo-router";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {href? : Href & string,title? : string}
export function MonthCardView({title,href, children, ...rest} : Props){
    return (
	<View className={[className.cardView,rest.className || ""].join(" ")}>
	    <View className={className.cardHeader}>
		<Text className={className.title}>{title}</Text>
	    </View>
	    <View className={children && (className.body)}>
		{children}
	    </View>
	</View>
    );
}

const className = {
    cardView : "flex flex-row flex-wrap gap-1 py-5 px-4 content-stretch rounded-2xl bg-[#2AAA9E]",
    more : "flex items-center text-[16px]",
    cardHeader : "flex flex-row items-center justify-start px-2 w-[44%]",
    title : "flex-grow text-[22px] font-bold leading-1 text-green-200",
    body : "flex flex-row justify-start items-center flex-grow basis-66 shrink",
};
