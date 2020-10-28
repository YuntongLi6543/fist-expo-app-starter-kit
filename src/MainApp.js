import React, { useState, useEffect, useMemo, createContext } from 'react';

//react-native components
import { StyleSheet, Text } from 'react-native';

//icons
import { Feather } from '@expo/vector-icons';

//react navigation
import { useSafeArea } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//packages
import AsyncStorage from '@react-native-community/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

//components
import LottieLoading from './components/LottieLoading';

//screens
import Home from './screens/home/Home';
import Order from './screens/order/Order';
import User from './screens/user/User';

import StackExample from './screens/home/Stack';

//stylesheet
import { Colors } from './styles';

//disable text setting of system
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

//define stack and tabs 
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MainApp() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getAppSetting() {
			await setLoading(true);
			await getLanguage();
			await setLoading(false);
		}

		getAppSetting();
	}, []);

	const getLanguage = async () => {
		const languageCode = await AsyncStorage.getItem('language');

		if (languageCode !== null) {
			i18n.locale = languageCode;
		} else {
			i18n.locale = Localization.locale;
		}
	}

	const MainStack = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Main"
					component={bottomTabs}
					options={{
						headerShown: false
					}}
				/>

				<Stack.Screen
					name="Stack"
					component={StackExample}
					options={{
						//headerShown: false
					}}
				/>
			</Stack.Navigator>
		);
	};

	const bottomTabs = () => {
		//put insets
		const insets = useSafeArea();

		return (
			<BottomTabs.Navigator
				tabBarOptions={{
					activeTintColor: Colors.primary,
					inactiveTintColor: Colors.secondary,
					style: {
						paddingVertical: 5,
						height: 50 + insets.bottom
					},
					tabStyle: {
						height: 50
					},
					labelStyle: {
						fontSize: 12
					}
				}}
				headerStyle={null}
			>
				<BottomTabs.Screen
					name='Home'
					component={HomeStack}
					options={{
						headerShown: false,
						title: i18n.t('home'),
						tabBarIcon: ({ color }) => (
							<Feather name="home" color={color} size={25} />
						),
					}}
				/>

				<BottomTabs.Screen
					name='Order'
					component={OrderStack}
					options={{
						headerShown: false,
						title: i18n.t('order'),
						tabBarIcon: ({ color }) => (
							<Feather name="clipboard" color={color} size={25} />
						),
					}}
				/>

				<BottomTabs.Screen
					name='user'
					component={UserStack}
					options={{
						headerShown: false,
						title: i18n.t('user'),
						tabBarIcon: ({ color }) => (
							<Feather name='user' color={color} size={25} />
						),
					}}
				/>
			</BottomTabs.Navigator>
		);
	};

	const HomeStack = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		);
	};

	const OrderStack = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="Order"
					component={Order}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		);
	};

	const UserStack = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="User"
					component={User}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		);
	};

	console.disableYellowBox = true;

	if (loading === true) {
		return <LottieLoading />
	}

	return (
		<NavigationContainer>
			<>{MainStack()}</>
		</NavigationContainer>
	);
}


export default MainApp;

const styles = StyleSheet.create({

});
