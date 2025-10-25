import { medicine_list } from "@/constants/data";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, ScrollView,View, TextInput, Text, StyleSheet, FlatList, type ComponentProps } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

function medicineGridBox({item} : {item : { description? : string, medicineId : string | number }}){
    const router = useRouter();
    return (
	<Pressable
	    onPress={
		() => router.navigate({
		    pathname : "/medicine/[data]",
		    params : { "data" : JSON.stringify(item) }
		})
	    }
	    style={styles.gridBox}
	>
	    <Text>{item.description}</Text>
	</Pressable>
    );
}
function SearchBar(){
    const router = useRouter(); 
    return (
	<View className={className.searchBarContainer}>
	    <TextInput
		placeholder="Search"
		className={className.searchBar}
	    />
	    <Pressable onPress={() => router.navigate("/")} className={className.searchButton}>
		<MaterialIcons name="search" size={24} />
	    </Pressable>
	</View>
    );
}
export default function MedicineIndex(){
    return (
	<View>
	    <SafeAreaView edges={['bottom','left','right']} >
		    <FlatList
		    ListHeaderComponent={SearchBar}
		    ListFooterComponent={null}
		    ListHeaderComponentStyle={styles.listHeader}
		    columnWrapperStyle={styles.grid}
		    contentContainerStyle={styles.grid}
		    style={styles.gridStyle}

		    numColumns={3}
		    initialNumToRender={3}
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
    searchBarContainer : "flex flex-row p-2 align-center",
    searchBar : "flex-1",
    searchButton : "p-2 aspect-square flex justify-center items-center",
    body : "flex px-2 gap-3",
    grid : "px-2 py-0 m-0",
    gridBox : "border basis-1/3 p-2 m-[4px] aspect-[6/8] rounded-[2px]",
}

const styles = StyleSheet.create({
    gridBox : {
	border : "1px solid black",
	flex : 1,
	maxWidth : "32%",
	borderColor : "black",
	borderWidth : 1,
	aspectRatio : "6 / 8"
    },
    listHeader : {
    },
    grid : {
	gap : 8,
    },
    gridStyle : {
	padding : 8
    }
})

