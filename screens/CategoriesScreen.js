import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
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

CategoriesScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Meal Categories',
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

const styles = StyleSheet.create({});
export default CategoriesScreen;
