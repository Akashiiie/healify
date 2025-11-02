
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Image, StyleSheet, type ComponentProps } from "react-native";

type Props = ComponentProps<typeof View>
export function CategoryView({children} : Props){
    return (
	<SafeAreaView edges={['bottom','left','right']}>
	    <ScrollView>
		{children}
	    </ScrollView>
	</SafeAreaView>
    );
}
