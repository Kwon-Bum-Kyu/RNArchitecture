import { useDispatch, useSelector } from "react-redux";
import { NewsData } from "../model/newsData";

const TAG = 'getServer'


export const fetchUrlForGet = ( url : string) => new Promise<void>(async (resolve, reject) => {
	console.log(TAG, 'fetchUrlForGet', url);
	// const dispatch = useDispatch()
	// const data = useSelector((state) => state.newsData)
	fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => response.json())
		.then((responseData) => {
			if(responseData.hasOwnProperty('response')){
				
				resolve(responseData);
			}else {
				console.log(TAG, 'fetchUrlForGet', responseData);
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