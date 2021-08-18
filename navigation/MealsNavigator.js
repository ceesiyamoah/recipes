import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const defNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? colors.primary : '',
	},
	headerTitleStyle: {
		fontFamily: 'open-sans',
	},
	headerTintColor: Platform.OS === 'android' ? '#Fff' : colors.primary,
	headerTitleAlign: 'center',
	headerTitle: 'A screen',
};

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {},
		},
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: {
			screen: MealDetailScreen,
		},
	},
	{
		defaultNavigationOptions: defNavOptions,
	}
);

const FavsNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defNavOptions,
	}
);

const MealsFavNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons
							name={
								tabInfo.focused ? 'ios-restaurant' : 'ios-restaurant-outline'
							}
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
		Favorites: {
			screen: FavsNavigator,
			navigationOptions: {
				tabBarLabel: 'Favs',
				tabBarIcon: (tabInfo) => {
					return (
						<Ionicons
							name={tabInfo.focused ? 'star' : 'star-outline'}
							size={24}
							color={tabInfo.tintColor}
						/>
					);
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: colors.primary,
			labelStyle: {
				fontFamily: 'open-sans',
			},
		},
	}
);

const mainNavigator = createDrawerNavigator(
	{
		main: MealsFavNavigator,
		Filters: createStackNavigator(
			{
				FiltersScreen,
			},
			{ defaultNavigationOptions: defNavOptions }
		),
	},
	{
		hideStatusBar: false,
		statusBarAnimation: 'none',
		contentOptions: {
			activeTintColor: colors.primary,
		},
	}
);

export default createAppContainer(mainNavigator);
