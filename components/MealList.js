import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ data, renderItem, navigation }) => {
	const renderMealItem = ({ item: { title, id, ...rest } }) => (
		<MealItem
			title={title}
			onSelect={() => {
				navigation.navigate('MealDetail', {
					mealId: id,
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
