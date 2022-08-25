
     interface Legacy {
        xlarge: string;
        xlargewidth: number;
        xlargeheight: number;
        thumbnail: string;
        thumbnailwidth?: number;
        thumbnailheight?: number;
        widewidth?: number;
        wideheight?: number;
        wide: string;
    }
     interface Multimedia {
        rank: number;
        subtype: string;
        caption?: any;
        credit?: any;
        type: string;
        url: string;
        height: number;
        width: number;
        legacy: Legacy;
        subType: string;
        crop_name: string;
    }

     interface Headline {
        main: string;
        kicker: string;
        content_kicker?: any;
        print_headline: string;
        name?: any;
        seo?: any;
        sub?: any;
    }

     interface Keyword {
        name: string;
        value: string;
        rank: number;
        major: string;
    }

     interface Person {
        firstname: string;
        middlename: string;
        lastname: string;
        qualifier?: any;
        title?: any;
        role: string;
        organization: string;
        rank: number;
    }

     interface Byline {
        original: string;
        person: Person[];
        organization: string;
    }

     interface Doc {
        abstract: string;
        web_url: string;
        snippet: string;
        lead_paragraph: string;
        print_section: string;
        print_page: string;
        source: string;
        multimedia: Multimedia[];
        headline: Headline;
        keywords: Keyword[];
        pub_date: Date;
        document_type: string;
        news_desk: string;
        section_name: string;
        subsection_name: string;
        byline: Byline;
        type_of_material: string;
        _id: string;
        word_count: number;
        uri: string;
    }

     interface Meta {
        hits: number;
        offset: number;
        time: number;
    }

     interface Response {
        docs: Doc[];
        meta: Meta;
    }
    export interface RootObject {
        status: string;
        copyright: string;
        response: Response;
    }
    
    // export function newsData(response? : RootObject) {
    //     function generateDocs() {
    //         return response?.response.docs
    //     }
    //     generateDocs()

    // }

    export class NewsData implements RootObject {
        
        status!: string;
        copyright!: string;
        response!: Response;
        newsData : any;
        constructor(props : RootObject) {
            this.newsData = props
        }
        
        generateDocs() {
            return this.newsData
        }
        /**
        * @param {Doc} docs     abstract: string;
                                web_url: string;
                                snippet: string;
                                lead_paragraph: string;
                                print_section: string;
                                print_page: string;
                                source: string;
                                multimedia: Multimedia[];
                                headline: Headline;
                                keywords: Keyword[];
                                pub_date: Date;
                                document_type: string;
                                news_desk: string;
                                section_name: string;
                                subsection_name: string;
                                byline: Byline;
                                type_of_material: string;
                                _id: string;
                                word_count: number;
                                uri: string;
        * 
        */
        getHeadLineMain(docs : Doc){
            return docs.headline.main
        }

    }
    
    // export function
