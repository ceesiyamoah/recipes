import { MEALS } from '../../data/dummy';
import { DELETE_FAVORITES, SET_FILTERS, TOGGLE_FAVORITE } from '../types';

const initialState = {
	meals: [...MEALS],
	filteredMeals: [...MEALS],
	favoriteMeals: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_FAVORITE:
			if (state.favoriteMeals.findIndex((item) => item.id === payload) >= 0)
				return {
					...state,
					favoriteMeals: [
						...state.favoriteMeals.filter((meal) => meal.id !== payload),
					],
				};
			else {
				const newMeal = state.meals.find((meal) => meal.id === payload);
				return { ...state, favoriteMeals: [...state.favoriteMeals, newMeal] };
			}

		case DELETE_FAVORITES:
			return { ...state, favoriteMeals: [] };

		case SET_FILTERS:
			const { glutenFree, lactoseFree, vegan, vegetarian } = payload;
			const filteredMeals = state.filteredMeals.filter((item) => {
				if (glutenFree && !item.isGlutenFree) return false;
				if (lactoseFree && !item.isLactoseFree) return false;
				if (vegan && !item.isVegan) return false;
				if (vegetarian && !item.isVegetarian) return false;

				return true;
			});

			return { ...state, filteredMeals };

		default:
			return state;
	}
};
