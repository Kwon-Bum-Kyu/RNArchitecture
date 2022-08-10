import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { fetchUrlForGet } from "./repository/getServer";
// import { Provider as StoreProvider } from "react-redux";


const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' //데이터 불러오기 위한 URL
const key = 'KAl6V11XeSivDQu2bbxm6jN23N7H9vN1'// 뉴욕타임즈 API키
import HomeViewModel from "./controller/Home/HomeViewModel";
import { NewsData, RootObject} from "./model/newsData";
import Home from "./view/Home";
// import NewsData from "./model/newsData";

export default function App() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<RootObject[]>([])
    useEffect(() => {
      const getPosts = async () => {
        let data = await fetchUrlForGet(url + `?q=china&api-key=${key}&page=${0}`)
        return data
      };
      getPosts().then((data) => {
        setData(data)
        setLoading(true)
      })
    }, []);
    // console.log('data', data);
    const model = new NewsData(data as unknown as RootObject)
    // console.log(model.newsData)
    const ViewModel = new HomeViewModel(model)
    
  return (
      loading ?
      <Home viewModel = {ViewModel}></Home> 
      :
      <View style={{flex:1}}/>
      
  )
}