const key = '6d8d1aea6c0c4cb6a19666e4dcce37ae';
/* const key = 'e731c427c0544fb38ec9642e70dadd15'; */

export const universalUrl = (query) => ` https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`;

export const topHeadlineUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`;

export const categoryTopHeadlineUrl = (category) =>
	`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`;
