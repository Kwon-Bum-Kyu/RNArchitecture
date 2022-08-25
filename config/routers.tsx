import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeProvider from '../provider/HomeProvider';
// import NewsViewProvider from '../provider/NewsViewProvider';




const Tab = createBottomTabNavigator();



const SetOfTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{ tabBarStyle:{position: 'absolute' } }}
		>
			<Tab.Screen
				name="검색"
				component={HomeProvider}
			/>
		</Tab.Navigator>
	);
};


 const CreateRootNavigator = () => {
	return (
		<NavigationContainer>
			<SetOfTab />
		</NavigationContainer>
	)
}
export default CreateRootNavigator