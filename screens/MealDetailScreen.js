import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy';
import { toggleFavorite } from '../store/actions/mealsAction';

const ListItem = ({ children }) => (
	<View style={styles.listItem}>
		<DefaultText>{children}</DefaultText>
	</View>
);

const MealDetailScreen = ({ navigation, meals, toggleFavorite, favs }) => {
	const mealId = navigation.getParam('mealId');
	useEffect(() => {
		navigation.setParams({
			toggleFavorite,
		});
	}, [toggleFavorite]);

	useEffect(() => {
		navigation.setParams({
			faved: favs.some((meal) => meal.id === mealId),
		});
	}, [favs]);

	const {
		duration,
		complexity,
		affordability,
		ingredients,
		title,
		steps,
		imageUrl,
	} = meals.find((item) => item.id === mealId);
	return (
		<ScrollView>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<DefaultText>{duration} m </DefaultText>
				<DefaultText>{complexity.toUpperCase()}</DefaultText>
				<DefaultText>{affordability.toUpperCase()}</DefaultText>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{ingredients.map((item) => (
				<ListItem key={item}>{item}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{steps.map((item) => (
				<ListItem key={item}>{item}</ListItem>
			))}
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around',
	},
	title: {
		fontFamily: 'open-sans-bold',
		padding: 5,
		fontSize: 22,
		textAlign: 'center',
	},
	listItem: {
		marginHorizontal: 10,
		marginVertical: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
	},
});

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const selectedMeal = MEALS.find(
		(item) => item.id === navigation.getParam('mealId')
	);

	const toggleFavorite = navigation.getParam('toggleFavorite');

	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='favorite'
					iconName={navigation.getParam('faved') ? 'star' : 'star-outline'}
					onPress={() => {
						toggleFavorite(selectedMeal.id);
					}}
				/>
			</HeaderButtons>
		),
	};
};

const mapStateToProps = (state) => ({
	meals: state.meals.meals,
	favs: state.meals.favoriteMeals,
});

const mapDispatchToProps = {
	toggleFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailScreen);
