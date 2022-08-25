
import { NewsData } from '../../model/newsData';

class HomeViewModel {
    model: NewsData;
    headline: any;
    pub_date: any;
    constructor(model: NewsData) {
        this.model = model
    }
    getlist() {
        // console.log('getlist', this.model.generateDocs());

        return this.model.generateDocs()
    }

}

export default HomeViewModel;