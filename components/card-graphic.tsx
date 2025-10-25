import { Link, Href, useRouter } from "expo-router";
import { ComponentProps, ReactElement } from "react";
import { Image, Text, View, Pressable } from "react-native";

type Props = Omit<ComponentProps<typeof Image>,"src"> & Omit<ComponentProps<typeof Link>, "href"> & {inline_button? : ReactElement,href : Href & string, src : string, title : string, subtitle? : string}
export function CardGraphic({inline_button,href,src,title,subtitle,...rest} : Props){
    const router = useRouter();
    return (
	<Pressable className={className.graphicContainer} onPress={() => {
	    router.navigate(href);
	}}>
	    <View className={className.graphicImageContainer}>
		<Image src={src} className={className.graphicImage}/>
	    </View>
	    <View className={className.graphicDescriptionContainer}>
		<View className={className.graphicDescriptionTitleContainer}>
		    <Text className={className.graphicDescriptionTitle}>{title}</Text>
		    {subtitle && (<Text className={className.graphicDescriptionSubtitle}>{subtitle}</Text>)}
		</View>
		{inline_button}
	    </View>
	</Pressable>
    );
}
const className = {
    graphicContainer : "flex flex-row justify-center bg-[#4A9F99] px-3 py-5 rounded-3xl",
    graphicImage : "min-h-[122px] aspect-square",
    graphicImageContainer : "p-2 mx-1",
    graphicDescriptionContainer : "flex flex-col items-center text-center grow px-3 pt-[16px] pb-3",
    graphicDescriptionTitleContainer : "flex flex-col items-center text-center",
    graphicDescriptionTitle : "text-[30px] font-bold",
    graphicDescriptionSubtitle : "text-xl font-bold",
}
