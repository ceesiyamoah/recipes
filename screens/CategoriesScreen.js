import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CategoryGridTile from '../components/CategoryGridTile';
import { colors } from '../constants/colors';
import { CATEGORIES } from '../data/dummy';

const CategoriesScreen = ({ navigation }) => {
	const renderGridItem = ({ title, color, id }) => (
		<CategoryGridTile
			title={title}
			color={color}
			onSelect={() =>
				navigation.navigate('CategoryMeals', {
					categoryId: id,
				})
			}
		/>
	);

	return (
		<FlatList
			numColumns={2}
			data={CATEGORIES}
			renderItem={({ item }) => renderGridItem(item)}
		/>
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({});
export default CategoriesScreen;
