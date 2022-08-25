
// console.log('data', data);
import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { NewsData, RootObject } from "../model/newsData";
import { fetchUrlForGet } from "../repository/getServer";

import { useSelector } from "react-redux";

import {newsURL} from '../util/key';
import HomeViewModel from "../controller/Home/HomeViewModel";
import HomeViewController from "../viewController/HomeViewController";

const HomeProvider = async() => {
    
    let data;

    useEffect( () => {
       getUrl().then((result) => console.log(result))
    },[])
    
    const model = new NewsData(data as unknown as RootObject)
    const viewModel = new HomeViewModel(model as NewsData);
    
    return (
    	<HomeViewController viewModel={viewModel}/>
    )
}

const getUrl = async() => {
    return await fetchUrlForGet(newsURL.url + `?q=china&api-key=${newsURL.key}&page=${0}`)
}

export default HomeProvider