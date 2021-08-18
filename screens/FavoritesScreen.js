import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { connect } from 'react-redux';

const FavoritesScreen = ({ navigation, meals }) => {
	return <MealList data={meals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
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
	};
};
const mapStateToProps = (state) => ({
	meals: state.meals.favoriteMeals,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
