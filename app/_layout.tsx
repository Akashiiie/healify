import "../global.css";
import { Link } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return (
	<ThemeProvider value={theme}>
	    <Stack
		screenOptions={{
		    headerStyle : {
			backgroundColor : theme.colors.background,
		    },
		}}
	    >
		<Stack.Screen
		    name="index"
		    options={{
			title : "Healify",
			headerRight : () => <Link href="/user-settings"><MaterialIcons name="settings" size={24}/></Link>
		    }}
		/>
		<Stack.Screen
		    name = "diagnosis"
		    options={{
			title : "Assessment",
		    }}
		/>
		<Stack.Screen
		    name = "diagnosis/diagnose/[options]"
		    options={{
			title : "Assessment",
		    }}
		/>
		<Stack.Screen
		    name = "medicine"
		    options={{
			title : "Medicine",
		    }}
		/>

		<Stack.Screen
		    name = "user-settings"
		    options={{
			title : "Settings",
		    }}
		/>
		<Stack.Screen
		    name = "category"
		/>
	    </Stack>
	    <StatusBar style="auto" />
	</ThemeProvider>
    );
}
