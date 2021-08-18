import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import mealsReducer from './store/reducers/mealsReducer';
import { Provider } from 'react-redux';

enableScreens(true);

const rootReducer = combineReducers({
	meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

export default function App() {
	const [loaded, setLoaded] = useState(false);

	if (!loaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setLoaded(true)}
				onError={() => console.log('err')}
			/>
		);
	}

	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
