import { DELETE_FAVORITES, SET_FILTERS, TOGGLE_FAVORITE } from '../types';

export const toggleFavorite = (id) => ({
	type: TOGGLE_FAVORITE,
	payload: id,
});

export const setFilters = (filterSettings) => {
	console.log('pressed');
	console.log(filterSettings);
	return {
		type: SET_FILTERS,
		payload: filterSettings,
	};
};

export const deleteFavorites = () => ({ type: DELETE_FAVORITES });
