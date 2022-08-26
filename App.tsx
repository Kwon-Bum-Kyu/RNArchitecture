import React, { useEffect, useState } from "react";
import CreateRootNavigator from './config/routers';
import { Provider as StoreProvider } from "react-redux";
// import { Provider as StoreProvider } from "react-redux";


import store from "./store/store";
// import NewsData from "./model/newsData";

export default function App() {
  return (
      <StoreProvider store={store}>
         <CreateRootNavigator/>
      </StoreProvider>
      
      
  )
}