import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy';
const CategoryMealsScreen = ({ navigation }) => {
	const selectedCategory = CATEGORIES.find(
		(item) => item.id === navigation.getParam('categoryId')
	);
	const selectedMeals = MEALS.filter((item) =>
		item.categoryIds.includes(selectedCategory.id)
	);

	const renderMealItem = ({ item: { title, id } }) => (
		<MealItem
			title={title}
			onSelect={() => {
				navigation.navigate('MealDetail', {
					mealId: id,
				});
			}}
		/>
	);

	return (
		<View style={styles.screen}>
			<FlatList
				data={selectedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const selectedCategory = CATEGORIES.find(
		(item) => item.id === navigation.getParam('categoryId')
	);

	return {
		headerTitle: selectedCategory.title,
		headerStyle: {
			backgroundColor: selectedCategory.color,
		},
		headerTintColor: 'white',
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default CategoryMealsScreen;