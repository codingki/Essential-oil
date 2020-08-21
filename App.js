import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StatusBar, StyleSheet, View } from 'react-native';
import Home from './screens/home';
import {
	useFonts,
	Nunito_200ExtraLight,
	Nunito_200ExtraLight_Italic,
	Nunito_300Light,
	Nunito_300Light_Italic,
	Nunito_400Regular,
	Nunito_400Regular_Italic,
	Nunito_600SemiBold,
	Nunito_600SemiBold_Italic,
	Nunito_700Bold,
	Nunito_700Bold_Italic,
	Nunito_800ExtraBold,
	Nunito_800ExtraBold_Italic,
	Nunito_900Black,
	Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';
export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		return (
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Home />
			</View>
		);
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/icon.png'),
			require('./assets/splash.png'),
		]),
		Font.loadAsync({ Nunito_400Regular, Nunito_700Bold, Nunito_900Black }),
	]);
}

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
