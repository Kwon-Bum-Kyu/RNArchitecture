
const TAG = 'getServer'
import { NewsData } from "../model/newsData"; 


const newsData = new NewsData

export const fetchUrlForGet = ( url : string) => new Promise<void>(async (resolve, reject) => {
	console.log(TAG, 'fetchUrlForGet', url);
	fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData)
			if(responseData.hasOwnProperty('response')){
				// console.log(responseData)
                
				newsData.newsData = responseData;
				resolve(newsData.newsData);
			}else {
				// console.log(TAG, 'fetchUrlForGet', responseData);
				resolve(responseData.fault)
			}
		})
		.catch(async(err) => {
			console.log(TAG, 'fetchUrlForGet', err);
			// await fetchUrlForGet(url)
			let dataset = {
				'error' : 'errorcode'
			}
			resolve(dataset);

		})
})