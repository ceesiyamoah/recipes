import React from 'react';
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

export default CategoryMealsScreen;
