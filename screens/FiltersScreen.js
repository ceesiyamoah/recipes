import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, ToastAndroid } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect } from 'react-redux';
import FilterSwitch from '../components/FilterSwitch';
import CustomHeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/actions/mealsAction';
const FiltersScreen = ({ navigation, setFilters }) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);

	useEffect(() => {
		navigation.setParams({
			setFilters: () =>
				setFilters({
					glutenFree: isGlutenFree,
					vegan: isVegan,
					lactoseFree: isLactoseFree,
					vegetarian: isVegetarian,
				}),
		});
	}, [setFilters, isGlutenFree, isVegan, isLactoseFree, isVegetarian]);
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
	const setFilters = navigation.getParam('setFilters');

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
						setFilters();
						ToastAndroid.show('Filters saved', ToastAndroid.SHORT);
					}}
				/>
			</HeaderButtons>
		),
	};
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	setFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersScreen);
