export const initialState={
    status: String,
    copyright: String,
    response: Response,
}

interface Response {
    docs: Doc[];
    meta: Meta;
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
    // news_desk: string;
    // section_name: string;
    // subsection_name: string;
    // byline: Byline;
    // type_of_material: string;
    // _id: string;
    // word_count: number;
    uri: string;
}

 interface Meta {
    hits: number;
    offset: number;
    time: number;
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
    // legacy: Legacy;
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

export const REQUEST_SET_NEWSDATA= "REQUEST_SET_NEWSDATA";

export const requestSetStore=(data : any)=>({
    type: REQUEST_SET_NEWSDATA,
    data: data
});

const marketStore=(state=initialState, action: { type: String; data: any; })=>{
    switch(action.type){
        case "REQUEST_SET_NEWSDATA":
            return {
                ...state,
                ...action.data,
            }
            break;
        default:
            return state;
            break;
    }
}
export default marketStore;



