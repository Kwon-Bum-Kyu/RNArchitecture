export const initialState={
    home: 0
}

export const REQUEST_HOME_RELOAD="REQUEST_HOME_RELOAD";

export const requestHomeReload=()=>({
    type: REQUEST_HOME_RELOAD,
});

const render=(state=initialState,action)=>{
    switch(action.type){
        case "REQUEST_HOME_RELOAD":
            return {
                ...state,
                home: state.home+1
            }
            break;
        default:
            return state;
            break;
    }
}
export default render;