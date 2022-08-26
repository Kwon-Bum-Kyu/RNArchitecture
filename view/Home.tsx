
import React, { PropsWithChildren } from 'react';
import {
	View,
	Text,
	FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import HomeViewModel from '../controller/Home/HomeViewModel';

type Props = {
  listItem : HomeViewModel;
}
const _renderItem = (index : Number, item : {headline : {main : String}, pub_date : String}) => { // 리스트로 뿌려주기 위한 데이터 형식
  // console.log(item.web_url);
  return (
    <TouchableOpacity style={{
      width: Dimensions.get('window').width - 20,
      height: 70,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 20
    }}
      activeOpacity={1}
      // onPress={() => this.openWebView(item.web_url)}
    >
      <View>
        <Text numberOfLines={1} style={{ fontSize: 12 }}>{'제목 : ' + item.headline.main}</Text>
        <Text style={{ marginTop: 5 }}>{`게시일 : ${item.pub_date}`}</Text>
      </View>
      
    </TouchableOpacity>
  )
};
const Home: React.FunctionComponent<Props> = ({
  listItem,
}) => {
  console.log(listItem);
  
  return (
    // <View></View>
    <FlatList
      style={{ flex: 1 }}
      // contentContainerStyle={{ paddingBottom: 30 }}
      data={listItem}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ index, item }) => _renderItem(index, item)}
      // onEndReached={this._handleLoadMore}
      onEndReachedThreshold={1}
      ListEmptyComponent={() => <View>
        <Text>검색 결과가 없습니다.</Text>
      </View>} 
      />
  );
}

  
   
export default Home;