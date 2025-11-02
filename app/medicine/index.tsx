import { medicine_list } from "@/constants/data";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, ScrollView,View, TextInput, Text, StyleSheet, FlatList, type ComponentProps } from "react-native";
import { Image } from "expo-image";
import { Asset } from "expo-asset";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

function medicineGridBox({item} : {item : { description? : string, medicineId : string | number }}){
    const router = useRouter();
    return (
	<Pressable
	    onPress={
		() => {
		    item.image = Asset.fromModule(item.image).uri;
		    return router.push({
			pathname : "/medicine/[data]",
			params : { "data" : JSON.stringify(item) }
		    })
		}
	    }
	    style={styles.gridBox}
	>
	    <Image source={item.image} style={{width : "100%", height : "80%", objectFit : "contain", resizeMode : "contain"}}/>
	    <Text style={{height : "20%", fontSize : 18, fontWeight : 500, paddingHorizontal : 6}}>{item.name}</Text>
	</Pressable>
    );
}
export default function MedicineIndex(){
    return (
	<View>
	    <SafeAreaView edges={['bottom','left','right']} >
		<FlatList
		    ListHeaderComponent={null}
		    ListFooterComponent={null}
		    ListFooterComponentStyle={styles.listFooter}
		    ListHeaderComponentStyle={styles.listHeader}
		    columnWrapperStyle={styles.grid}
		    contentContainerStyle={styles.gridContent}
		    style={styles.gridStyle}
		    numColumns={2}
		    data = {medicine_list}
		    renderItem = {medicineGridBox}
		/>
	    </SafeAreaView>
	    <View className={className.body}>
	    </View>
	</View>
    );
}

const className = {
    body : "flex px-2 gap-3",
    grid : "px-4 py-0 m-0",
    gridBox : "border p-2 m-[4px] aspect-[6/8] rounded-[2px]",
}

const styles = StyleSheet.create({
    gridBox : {
	border : "1px solid black",
	flex : 1/2,
	flexShrink : 1,
	borderColor : "black",
	borderWidth : 1,
	aspectRatio : 6 / 8,
    },
    listHeader : {
    },
    listFooter : {
	padding : 8,
	
    },
    grid : {
	gap : 8,
	justifyContent : "stretch",
    },
    gridContent :{
	gap : 8,
	justifyContent : "stretch",
	paddingBottom : 16,
    },
    gridStyle : {
	padding : 8,
    }
})

