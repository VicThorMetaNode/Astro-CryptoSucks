// api.js

const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-Rapidapi-key': '49848b005amshe8bca68c28066e4p15202fjsn8daf06491b00',
	}
};

//FIRST SIMPLE VERSION
const response = await fetch(url, options);
const data = await response.json(); // Parse the JSON response
const stats = data.data.stats; //
const coins = data.data.coins;

// console.log("Total Coins:", coins)

export { stats, coins };
// VERY FANCY VERSION FOR STATS AND COINS FETCHING
// async function fetchStatsWithRetry(url, options, maxRetries = 3, delayBetweenRetries = 1000) {
//     let retryCount = 0;
//     let stats = null;
//     let coins = null;
  
//     while (retryCount < maxRetries) {
//       try {
//         const response = await fetch(url, options);
//         if (response.ok) {
//           const data = await response.json();
//           stats = data.data.stats;
//           coins = data.data.coins;
//           break;
//         }
//       } catch (error) {
//         console.error(`Attempt ${retryCount + 1} failed:`, error.message);
//       }
  
//       retryCount++;
//       if (retryCount < maxRetries) {
//         console.log(`Retrying in ${delayBetweenRetries / 1000} seconds...`);
//         await new Promise(resolve => setTimeout(resolve, delayBetweenRetries));
//       }
//     }
  
//     if (stats === null || coins === null) {
//       console.error(`All ${maxRetries} attempts failed. Could not fetch data.`);
//     }
  
//     return { stats, coins };
//   }
  
//   const { stats, coins } = await fetchStatsWithRetry(url, options);
  
//   export { stats, coins };
  


//VERY FANCY VERSION FOR STATS ONLY 
// async function fetchStatsWithRetry(url, options, maxRetries = 3, delayBetweenRetries = 1000) {
//   let retryCount = 0;
//   let stats = null;

//   while (retryCount < maxRetries) {
//       try {
//           const response = await fetch(url, options);
//           if (response.ok) {
//               const data = await response.json();
//               stats = data.data.stats;
//               break;
//           }
//       } catch (error) {
//           console.error(`Attempt ${retryCount + 1} failed:`, error.message);
//       }

//       retryCount++;
//       if (retryCount < maxRetries) {
//           console.log(`Retrying in ${delayBetweenRetries / 1000} seconds...`);
//           await new Promise(resolve => setTimeout(resolve, delayBetweenRetries));
//       }
//   }

//   if (stats === null) {
//       console.error(`All ${maxRetries} attempts failed. Could not fetch data.`);
//   }

//   return stats;
// }

// const stats = await fetchStatsWithRetry(url, options);
// export { stats };



//MORE ELABORATED VERSION
// let stats = null;

// try {
//     const response = await fetch(url, options);
//     const data = await response.json(); // Parse the JSON response
//     stats = data.data.stats; // Assign the value of "stats" within the try block
// } catch (error) {
//     console.error('An error occurred:', error.message);
//     throw error; // Rethrow the error for higher-level handling
// }

// export { stats };





    //ACCESS 'STATS' OBJECTS
    // console.log("Total:", stats.total);
    // console.log("Total Coins:", stats.totalCoins);
    // console.log("Total Markets:", stats.totalMarkets);
    // console.log("Total Exchanges:", stats.totalExchanges);
    // console.log("Total Market Cap:", stats.totalMarketCap);
    // console.log("Total 24h Volume:", stats.total24hVolume);