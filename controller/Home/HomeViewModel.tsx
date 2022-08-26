
import React from 'react';
import { useDispatch } from 'react-redux';
import { NewsData } from '../../model/newsData';
import { requestSetNewsData } from '../../store/reducers/newsData';
import store from '../../store/store';


type Props = {
    model : NewsData;
    headline : any;
    pub_date: any;
  }


class HomeViewModel implements Props{
    model: NewsData;
    headline: any;
    pub_date: any;
    
    constructor(model: NewsData) {
        this.model = model
    }
    getlist() {
        return this.model.generateDocs()
    }

}

export default HomeViewModel;