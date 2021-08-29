import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { connect } from 'react-redux';
import { deleteFavorites } from '../store/actions/mealsAction';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = ({ navigation, meals, deleteFavorites }) => {
	useEffect(() => {
		navigation.setParams({
			deleteFavorites,
		});
	}, [deleteFavorites]);
	useEffect(() => {
		navigation.setParams({
			meals: meals.length,
		});
	}, [meals]);

	if (!meals.length) {
		return (
			<View style={styles.screen}>
				<Text style={styles.text}>No Favorites yet</Text>
			</View>
		);
	}
	return <MealList data={meals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
	const deleteFavorites = navigation.getParam('deleteFavorites');
	const mealsLength = navigation.getParam('meals');

	return {
		headerTitle: 'Your Favorites',
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
		headerRight: () => {
			if (!mealsLength) {
				return null;
			}

			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title='Delete'
						iconName='trash-outline'
						onPress={() => {
							deleteFavorites();
						}}
					/>
				</HeaderButtons>
			);
		},
	};
};
const mapStateToProps = (state) => ({
	meals: state.meals.favoriteMeals,
});

const mapDispatchToProps = {
	deleteFavorites,
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
