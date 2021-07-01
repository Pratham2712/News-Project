const initState = {
	topHeadline: [],
	universal: [],
	category: [],
	isTopHeadlineLoading: true
};

const topHeadlineReducer = (state = initState, action) => {
	switch (action.type) {
		case 'TOP_HEADLINES':
			return {
				...state,
				topHeadline: action.payload.topHeadline,
				isTopHeadlineLoading: false
			};
		case 'FETCH_SEARCH':
			return {
				...state,
				universal: action.payload.universal
			};
		case 'CATEGORY_SEARCH':
			return {
				...state,
				category: action.payload.category
			};
		case 'CLEAR_SEARCH':
			return {
				...state,
				universal: []
			};

		case 'CLEAR_SELECT':
			return {
				...state,
				category: []
			};
		case 'TOP_LOADING':
			return {
				...state,
				isTopHeadlineLoading: true
			};

		default:
			return { ...state };
	}
};

export default topHeadlineReducer;
