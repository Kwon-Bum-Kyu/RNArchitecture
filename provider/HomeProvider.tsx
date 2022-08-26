
// console.log('data', data);
import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { NewsData, RootObject } from "../model/newsData";
import { fetchUrlForGet } from "../repository/getServer";
import { newsURL } from '../util/key';
import HomeViewModel from "../controller/Home/HomeViewModel";
import HomeViewController from "../viewController/HomeViewController";
import { useDispatch, useSelector } from "react-redux";
import { requestSetNewsData } from "../store/reducers/newsData";

const HomeProvider = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.newsData);
    useEffect(() => {
        const getUrl = async () => {
            let data = await fetchUrlForGet(newsURL.url + `?q=china&api-key=${newsURL.key}&page=${0}`)
            
            return data
        };
        getUrl().then((result) => {
            dispatch(requestSetNewsData(result))
        })
    }, [])


    const model = new NewsData(selector as unknown as RootObject)
    const viewModel = new HomeViewModel(model as NewsData);

    return (
            <HomeViewController viewModel={viewModel} />
       
    )


}



export default HomeProvider