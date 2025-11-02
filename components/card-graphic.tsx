import { Link, Href, useRouter } from "expo-router";
import { ComponentProps, ReactElement } from "react";
import { Image,Text, View, Pressable,StyleSheet } from "react-native";
// import { Image } from "expo-image";

type Props = Omit<ComponentProps<typeof Image>,"src"> & Omit<ComponentProps<typeof Link>, "href"> & {inline_button? : ReactElement,href : Href & string, source : any, title : string, subtitle? : string}
export function CardGraphic({children,href,source,title,subtitle,...rest} : Props){
    const router = useRouter();
    return (
	<Pressable className={[className.graphicContainer,rest.className].join(" ")} onPress={() => {
	    router.navigate(href);
	}}>
	    <View className={className.graphicImageContainer}>
		<Image
		    source={source}
		    className={className.graphicImage}
		    style={styles.graphicImage}
		/>
	    </View>
	    <View className={className.graphicDescriptionContainer}>
		<View className={className.graphicDescriptionTitleContainer}>
		    <Text className={className.graphicDescriptionTitle}>{title}</Text>
		    {subtitle && (<Text className={className.graphicDescriptionSubtitle}>{subtitle}</Text>)}
		</View>
		{children}
	    </View>
	</Pressable>
    );
}
const className = {
    graphicContainer : "flex flex-row justify-center bg-[#65F27B] px-3 py-3 rounded-3xl",
    graphicImage : "aspect-square",
    graphicImageContainer : "p-1 flex justify-center align-center",
    graphicDescriptionContainer : "flex flex-col items-stretch text-center grow px-3 py-6 gap-3",
    graphicDescriptionTitleContainer : "flex flex-col items-center text-center gap-1",
    graphicDescriptionTitle : "text-[36px] font-black",
    graphicDescriptionSubtitle : "text-[18px] font-extrabold",
};
const styles = StyleSheet.create({
    graphicImage : {
	objectFit : "contain",
    } 
});
