import axios from 'axios';
import { topHeadlineUrl, universalUrl, categoryTopHeadlineUrl } from '../Api';

export const loadTopHeadlines = () => async (dispatch) => {
	dispatch({ type: 'TOP_LOADING' });
	const topHeadlineData = await axios.get(topHeadlineUrl);

	dispatch({
		type: 'TOP_HEADLINES',
		payload: {
			topHeadline: topHeadlineData.data.articles
		}
	});
};

export const fetchSearch = (query) => async (dispatch) => {
	const universalData = await axios.get(universalUrl(query));

	dispatch({
		type: 'FETCH_SEARCH',
		payload: {
			universal: universalData.data.articles
		}
	});
};

export const categorySearch = (category) => async (dispatch) => {
	const categoryData = await axios.get(categoryTopHeadlineUrl(category));

	dispatch({
		type: 'CATEGORY_SEARCH',
		payload: {
			category: categoryData.data.articles
		}
	});
};
