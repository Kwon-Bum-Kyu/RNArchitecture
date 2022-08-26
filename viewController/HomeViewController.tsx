import React, { PropsWithChildren, useState, useCallback } from 'react';
import { View } from "react-native";
import HomeViewModel from '../controller/Home/HomeViewModel';
import Home from '../view/Home';





export type Props = {
    viewModel: HomeViewModel;
}

const HomeViewController: React.FC<PropsWithChildren<Props>> = ({
    viewModel
}) => {
    

    return (
        <Home
            listItem={viewModel.getlist()}
        />
    )
}

export default HomeViewController