const newsCategory = 'Cryptocurrency';
const count = 50;
const language = 'en';

const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}&setLang=${language}`;

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': import.meta.env.ASTRO_RAPIDAPI_BING_KEY,
		'X-RapidAPI-Host': import.meta.env.ASTRO_RAPIDAPI_BING_HOST
	}
};

//FIRST SIMPLE VERSION
const response = await fetch(url, options);
const data = await response.json();
const news = data.value;

export {news}
