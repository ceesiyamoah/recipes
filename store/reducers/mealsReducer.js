import { MEALS } from '../../data/dummy';

const initialState = {
	meals: [...MEALS],
	filteredMeals: [...MEALS],
	favoriteMeals: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		// case typeName:
		// 	return { ...state, ...payload };

		default:
			return state;
	}
};
