import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/pages/home/Home';
import ClipNews from '../components/pages/clipNews/ClipNews';



const Tab = createBottomTabNavigator();



const SetOfTab = () => {
	return (
		<Tab.Navigator
			screenOptions={{ tabBarStyle:{position: 'absolute' } }}
		>
			<Tab.Screen
				name="검색"
				component={Home}
			/>
			<Tab.Screen
				name="클립한 뉴스"
				component={ClipNews}
			/>

		</Tab.Navigator>
	);
};


export const createRootNavigator = () => {
	return (
		<NavigationContainer>
			<SetOfTab />
		</NavigationContainer>
	)
}