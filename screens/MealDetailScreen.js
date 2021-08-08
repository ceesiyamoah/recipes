import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
const MealDetailScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text>Meal Detail</Text>
			<Button title='Go to meals' onPress={() => navigation.goBack()} />
			<Button title='Go to Categories' onPress={() => navigation.popToTop()} />
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
export default MealDetailScreen;
