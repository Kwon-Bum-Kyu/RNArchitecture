export const initialState={
    "CplatToken": "",
    "VerificationToken": null,
    "Email": null,
    "UserNo": "",
    "AuthCode": null,
    "AuthName": null,
    "Password": "",
    "Name": "",
    "PhoneNumber": "",
    "UseYn": "Y",
    "LastLoginDate": null,
    "SnsType": null,
    "SnsToken": null,
    "PushAlertToken": null,
    "StoreNm": "",
    "StoreThumbnailImageUrl" : null,
    "AdAgreeYn" : "N",
    "DailyReportYn": "N",
    
    "ExpoToken": null,
    "hasMarket": null,
}

// public string CplatToken { get; set; }
// public string VerificationToken { get; set; }
// public string Email { get; set; }
// public string UserNo { get; set; }
// public string Password { get; set; }
// public string Name { get; set; }
// public string PhoneNumber { get; set; }
// public string UseYn { get; set; }
// public string LastLoginDate { get; set; }
// public string SnsType { get; set; }
// public string SnsToken { get; set; }
// public string PushAlertToken { get; set; }

// public string BizNo { get; set; }
// public string BizType { get; set; }
// public string BizNm { get; set; }

// public string StoreName { get; set; }
// public string StoreCategory1 { get; set; }
// public string StoreCategory2 { get; set; }
// public DateTime StoreSinceWhenSales { get; set; }

// public string StoreThumbnailImageUrl { get; set; }
// public string AdAgreeYn { get; set; }
// public string DailyReportYn { get; set; }

export const REQUEST_SET_USER="REQUEST_SET_USER";
export const REQUEST_RESET_USER="REQUEST_RESET_USER";


export const requestSetUser=(data)=>({
    type: REQUEST_SET_USER,
    data: data
});

export const requestResetUser=(data)=>({
    type: REQUEST_RESET_USER,
});

const user=(state=initialState,action)=>{
    switch(action.type){
        case "REQUEST_SET_USER":
            return {
                ...state,
                ...action.data,
            }
            break;
        case "REQUEST_RESET_USER":
            return {
                "AuthCode": null,
                "AuthName": null,
                "Email": null,
                "LastLoginDate": null,
                "MarketAccountInfo": null,
                "Name": "",
                "Password": "",
                "PhoneNumber": "",
                "SellerImgUrl": "",
                "SellerNm": "",
                "UseYn": "Y",
                "UserNo": "110",
                "SnsType": null,
                "SnsToken": null,
                "ExpoToken": null,
                "BusinessNo": '',
                "BusinessType": '',
                "BusinessName": '',
                "CplatToken": ""
            }
            break;
            REQUEST_RESET_USER
        default:
            return state;
            break;
    }
}
export default user;