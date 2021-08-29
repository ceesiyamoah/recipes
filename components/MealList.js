import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = ({ data, renderItem, navigation }) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);

	const renderMealItem = ({ item: { title, id, ...rest } }) => (
		<MealItem
			title={title}
			onSelect={() => {
				navigation.navigate('MealDetail', {
					mealId: id,
					mealTitle: title,
					faved: favMeals.some((meal) => meal.id === id),
				});
			}}
			{...rest}
		/>
	);

	return (
		<View style={styles.screen}>
			<FlatList
				data={data}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 15,
	},
});
export default MealList;
