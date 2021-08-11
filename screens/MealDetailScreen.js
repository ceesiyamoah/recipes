import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy';
const MealDetailScreen = ({ navigation }) => {
	const selectedMeal = MEALS.find(
		(item) => item.id === navigation.getParam('mealId')
	);
	return (
		<View style={styles.screen}>
			<Text>{selectedMeal.title}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const selectedMeal = MEALS.find(
		(item) => item.id === navigation.getParam('mealId')
	);
	return {
		headerTitle: selectedMeal.title,
	};
};
export default MealDetailScreen;
