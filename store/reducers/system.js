export const initialState = {
  lang: "ko",
  isMessageModalOpen: false,
  messageModalType: "success",
  messageModalMessage1: "",
  messageModalMessage2: "",
  expoToken: null,
  isSnsWebView: false,
  acceptCallback: null,
  navigation: null,
  tabNavigation: null,
  tabIndex: 0,
  tabRefreshCount: 0,
  statusHeight: 0,
  OS: null,
  isExit: false,
  isNeedModal: false,
  isNeedCancel: false,
  isLoading: false,
  backRefreshCount: 0,
  isDocumentModalOpen: false,
  topMargin: 0,
  isHamburgerModalOpen: false,
  statusBarBackgroundColor: "#FFFFFF",
  tabTarget: {
    index: null,
    name: null,
  },
  isHomePreviewModalOpen: true,
};

const initialStateDump = {
  lang: "ko",
  isMessageModalOpen: false,
  messageModalType: "success",
  messageModalMessage1: "",
  messageModalMessage2: "",
  expoToken: null,
  isSnsWebView: false,
  acceptCallback: null,
  navigation: null,
  tabNavigation: null,
  tabIndex: 0,
  tabRefreshCount: 0,
  statusHeight: 0,
  OS: null,
  isExit: false,
  isNeedModal: false,
  isNeedCancel: false,
  isLoading: false,
  backRefreshCount: 0,
  isDocumentModalOpen: false,
  topMargin: 0,
  isHamburgerModalOpen: false,
  statusBarBackgroundColor: "#FFFFFF",
  tabTarget: {
    index: null,
    name: null,
  },
  isHomePreviewModalOpen: true,
};
export const REQUEST_RESET_SYSTEM = "REQUEST_RESET_SYSTEM";
export const REQUEST_MESSAGE_MODAL_OPEN = "REQUEST_MESSAGE_MODAL_OPEN";
export const REQUEST_MESSAGE_MODAL_CLOSE = "REQUEST_MESSAGE_MODAL_CLOSE";
export const REQUEST_SET_SYSTEM = "REQUEST_SET_SYSTEM";
export const REQUEST_HAMBURGER_MODAL_OPEN = "REQUEST_HAMBURGER_MODAL_OPEN";
export const REQUEST_HAMBURGER_MODAL_CLOSE = "REQUEST_HAMBURGER_MODAL_CLOSE";
export const REQUEST_SNS_WEBVIEW_OFF = "REQUEST_SNS_WEBVIEW_OFF";
export const REQUEST_SNS_WEBVIEW_ON = "REQUEST_SNS_WEBVIEW_ON";
// export const REQUEST_SET_BACKDROP="REQUEST_SET_BACKDROP";
// export const REQUEST_BACKDROP="REQUEST_BACKDROP";
export const requestResetSystem = (data) => ({
  type: REQUEST_RESET_SYSTEM,
  data: data,
});

export const requestMessageModalOpen = (data) => ({
  type: REQUEST_MESSAGE_MODAL_OPEN,
  data: data,
});

export const requestMessageModalClose = (data) => ({
  type: REQUEST_MESSAGE_MODAL_CLOSE,
  data: data,
});

export const requestHamburgerModalOpen = (data) => ({
  type: REQUEST_HAMBURGER_MODAL_OPEN,
  data: data,
});

export const requestHamburgerModalClose = (data) => ({
  type: REQUEST_HAMBURGER_MODAL_CLOSE,
  data: data,
});

export const requestSetSystem = (data) => ({
  type: REQUEST_SET_SYSTEM,
  data: data,
});

export const requestSnsWebViewOn = (data) => ({
  type: REQUEST_SNS_WEBVIEW_ON,
});

export const requestSnsWebViewOff = (data) => ({
  type: REQUEST_SNS_WEBVIEW_OFF,
});

// export const requestSetBackdrop=(data)=>({
//     type: REQUEST_SET_BACKDROP,
//     data: data
// });

// export const requestBackdrop=()=>({
//     type: REQUEST_BACKDROP,
// });

const system = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "REQUEST_RESET_SYSTEM":
      return {
        ...initialStateDump,
      };
      break;
    case "REQUEST_MESSAGE_MODAL_OPEN":
      return {
        ...state,
        isMessageModalOpen: true,
        messageModalType: action.data.type,
        messageModalMessage1: action.data.message1,
        messageModalMessage2:
          action.data.message2 !== undefined || action.data.message2 !== null
            ? action.data.message2
            : "",
        acceptCallback: action.data.acceptCallback,
        isExit: action.data.isExit == true ? true : false,
        isLoading: action.data.isLoading == true ? true : false,
        isNeedModal: action.data.isNeedModal == true ? true : false,
        isNeedCancel: action.data.isNeedCancel == true ? true : false,
      };
      break;
    case "REQUEST_MESSAGE_MODAL_CLOSE":
      return {
        ...state,
        isMessageModalOpen: false,
        acceptCallback: null,
        isExit: false,
        isLoading: false,
        isNeedModal: false,
        isNeedCancel: false,
      };
      break;
    case "REQUEST_SET_SYSTEM":
      return {
        ...state,
        ...action.data,
      };
      break;
    case "REQUEST_SNS_WEBVIEW_ON":
      return {
        ...state,
        isSnsWebView: true,
      };
      break;
    case "REQUEST_SNS_WEBVIEW_OFF":
      return {
        ...state,
        isSnsWebView: false,
      };
      break;

    // case "REQUEST_SET_BACKDROP":
    //     return {
    //         ...state,
    //         bs: action.data.bs
    //     }
    //     break;
    // case "REQUEST_BACKDROP":
    //     state.bs.current.snapTo(1);
    //     return {
    //         ...state,
    //     }
    //     break;
    case "REQUEST_HAMBURGER_MODAL_OPEN":
      return {
        ...state,
        isHamburgerModalOpen: true,
      };
      break;
    case "REQUEST_HAMBURGER_MODAL_CLOSE":
      return {
        ...state,
        isHamburgerModalOpen: false,
      };
      break;
    default:
      return state;
      break;
  }
};
export default system;
