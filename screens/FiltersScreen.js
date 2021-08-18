import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FilterSwitch from '../components/FilterSwitch';
import CustomHeaderButton from '../components/HeaderButton';
import { colors } from '../constants/colors';
const FiltersScreen = () => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				title='Gluten Free'
				isPositive={isGlutenFree}
				onValueChange={() => setIsGlutenFree((prev) => !prev)}
			/>
			<FilterSwitch
				title='Vegan'
				isPositive={isVegan}
				onValueChange={() => setIsVegan((prev) => !prev)}
			/>
			<FilterSwitch
				title='Vegetarian'
				isPositive={isVegetarian}
				onValueChange={() => setIsVegetarian((prev) => !prev)}
			/>
			<FilterSwitch
				title='Lactose Free'
				isPositive={isLactoseFree}
				onValueChange={() => setIsLactoseFree((prev) => !prev)}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
	},
});

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Filter Meals',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='Menu'
					iconName='menu-outline'
					onPress={() => {
						navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='Save'
					iconName='save'
					onPress={() => {
						console.log('save');
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default FiltersScreen;
