import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
    ScrollView,
    View,
    Image,
    StyleSheet,
    type ComponentProps
} from "react-native";

type Props = ComponentProps<typeof Image> & {};
export function ArticleView({source,children} : Props){
    return (
	<SafeAreaView edges={['bottom','left','right']}>
	    <ScrollView>
	    {
		source && (
		<View style={styles.header}>
		    <Image source={source} style={styles.headerImage}/>
		</View>
		    )
	    }
		<View style={styles.body}>
		    {children}
		</View>
	    </ScrollView>
	</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header : {
	borderBottomWidth : 0.5,
	borderColor : "#00000040",
	borderStyle : "solid",
    },
    headerImage : {
	objectFit : "cover",
	width : "100%",
	height : 300,
    },
    body : {},
});
