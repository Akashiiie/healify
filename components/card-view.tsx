import type { ComponentProps, ReactElement } from "react";
import { View, Text } from "react-native";
import { Href, Link } from "expo-router";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {href? : Href & string,title? : string}
export function CardView({title,href, children, ...rest} : Props){
    return (
	<View className={className.cardView}>
	    <View className={className.cardHeader}>
		<Text className={className.title}>{title}</Text>
		{href && (<Link href={href} className={className.more}>More</Link>) }
	    </View>
	    <View className={children && (className.body)}>
		{children}
	    </View>
	</View>
    );
}

const className = {
    cardView : "flex flex-col p-2",
    cardHeader : "flex flex-row items-center pb-3 px-[5px]",
    title : "flex-grow py-2 text-[24px] font-bold",
    more : "flex items-center text-[16px]",
    body : "rounded-[6px] p-2",
};
