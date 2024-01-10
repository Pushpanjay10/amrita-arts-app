import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { handleUserState } from './src/firebase/auth';

import AuthStack from './src/navigation/AuthStack';
import HomeStack from './src/navigation/HomeStack';

import { StatusBar } from 'expo-status-bar';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer, colorScheme } from '@react-navigation/native';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#f0853d',
		accent: '#f1c40f',
		surfaceDisabled: '#bd6931',
		background: '#1e1e1e',
		text: 'white',
		outline: 'white',
	},
};

const navigationTheme = {
	dark: colorScheme === 'dark',
	colors: {
		// border: theme.colors.background,
		background: theme.colors.background,
		// card: null,
		// notification: theme.colors.outline,
		primary: theme.colors.primary,
		text: theme.colors.outline,
	},
};

export default function App() {
	const [user, setUser] = useState('loading');

	useEffect(() => {
		handleUserState(setUser);
	}, []);
	return (
		<NavigationContainer theme={navigationTheme}>
			<PaperProvider
				theme={theme}
				// settings={{
				// 	icon: (props) => <AwesomeIcon {...props} />,
				// }}
			>
				<StatusBar style="light" />
				{user === 'loading' ? (
					<View style={{ flex: 1, backgroundColor: '#242526', justifyContent: 'center' }}>
						<Image
							source={require('./assets/newLogoM.png')}
							style={{ height: 100, aspectRatio: 1, alignSelf: 'center' }}
						/>
					</View>
				) : user === 'logged' ? (
					<HomeStack />
				) : (
					<AuthStack />
				)}

				{/* <AuthStack /> */}
				{/* <HomeStack /> */}
			</PaperProvider>
		</NavigationContainer>
	);
}
