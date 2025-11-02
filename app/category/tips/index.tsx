import { ArticleView } from "@/components/article-view";
import { View, Text, StyleSheet } from "react-native";

export default function TipsPage(){
    return (
	<ArticleView
	    source = {require("@/assets/images/medicine-tips.jpg")}
	>
	    <View style={styles.titleView}>
		<Text style={styles.titleText}>Health Tips</Text>
	    </View>
	</ArticleView>
    );
}

const styles = StyleSheet.create({
    titleView : {
	marginTop : 2,
	paddingVertical : 16,
	paddingHorizontal : 14
    },
    titleText : {
	fontSize : 36,
	fontWeight : "bold"
    }
});
