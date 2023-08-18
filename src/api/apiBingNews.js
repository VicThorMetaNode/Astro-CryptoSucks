const newsCategory = 'Cryptocurrency';
const count = 50;
const language = 'en';

const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}&setLang=${language}`;

const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '49848b005amshe8bca68c28066e4p15202fjsn8daf06491b00',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

//FIRST SIMPLE VERSION
const response = await fetch(url, options);
const data = await response.json();
const news = data.value;

export {news}
