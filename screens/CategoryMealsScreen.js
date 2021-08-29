import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy';

const CategoryMealsScreen = ({ navigation }) => {
	const availableMeals = useSelector((state) => state.meals.filteredMeals);

	const selectedCategory = CATEGORIES.find(
		(item) => item.id === navigation.getParam('categoryId')
	);
	const selectedMeals = availableMeals.filter((item) =>
		item.categoryIds.includes(selectedCategory.id)
	);

	if (!selectedMeals.length) {
		return (
			<View style={styles.screen}>
				<Text style={styles.text}>No Meals in this category</Text>
			</View>
		);
	}

	return <MealList data={selectedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const selectedCategory = CATEGORIES.find(
		(item) => item.id === navigation.getParam('categoryId')
	);
	return {
		headerTitle: selectedCategory.title,
		headerTintColor: 'white',
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 26,
		textAlign: 'center',
		height: '100%',
		textAlignVertical: 'center',
		color: 'grey',
	},
});

export default CategoryMealsScreen;
