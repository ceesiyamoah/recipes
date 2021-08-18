import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy';

const ListItem = ({ children }) => (
	<View style={styles.listItem}>
		<DefaultText>{children}</DefaultText>
	</View>
);

const MealDetailScreen = ({ navigation }) => {
	const meals = useSelector((state) => state.meals.meals);
	const {
		duration,
		complexity,
		affordability,
		ingredients,
		title,
		steps,
		imageUrl,
	} = meals.find((item) => item.id === navigation.getParam('mealId'));
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
	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title='favorite' iconName='heart' onPress={() => {}} />
			</HeaderButtons>
		),
	};
};
export default MealDetailScreen;
