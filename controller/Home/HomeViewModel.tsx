
import { useDispatch } from 'react-redux';
import { NewsData } from '../../model/newsData';
import { requestSetNewsData } from '../../store/reducers/newsData';
import store from '../../store/store';


class HomeViewModel {
    model: NewsData;
    headline: any;
    pub_date: any;
    
    constructor(model: NewsData) {
        this.model = model
    }
    getlist() {
        const dispatch = useDispatch();

        dispatch(requestSetNewsData(this.model.generateDocs()));
        

        // console.log(store.getState().newsData);
        
        return store.getState().newsData;
    }

}

export default HomeViewModel;