export const initialState={
    "Category1": "",
    "Category2": "",
    "SinceWhenSales": "",
    "ImgUrl": "",
    "StoreNm": "",
}

export const REQUEST_SET_STORE="REQUEST_SET_STORE";


export const requestSetStore=(data)=>({
    type: REQUEST_SET_STORE,
    data: data
});

const marketStore=(state=initialState,action)=>{
    switch(action.type){
        case "REQUEST_SET_STORE":
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