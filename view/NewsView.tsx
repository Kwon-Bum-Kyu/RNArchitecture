
import React, { PropsWithChildren } from 'react';
import {
	View,
	Text,
	FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HomeViewModel from '../controller/Home/HomeViewModel';

export type Props = {
  viewModel: HomeViewModel;
}

const NewsView: React.FC<PropsWithChildren<Props>> = ({
  viewModel
}) => {
//   let todos = viewModel.getlist();
//   // console.log(todos);
  
  return (
    <View style={{backgroundColor:'red', flex:1}}></View>
  )
}

  
   
export default NewsView;