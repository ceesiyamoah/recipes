import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { colors } from '../constants/colors';

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
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? colors.primary : '',
			},
			headerTintColor: Platform.OS === 'android' ? '#Fff' : colors.primary,
			headerTitleAlign: 'center',
		},
	}
);

export default createAppContainer(MealsNavigator);
