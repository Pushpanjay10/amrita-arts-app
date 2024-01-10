import React, { useState, useCallback } from 'react';
import { login } from '../styles/authScreensStyle';
import { handleLoginForm } from '../firebase/auth';

import { Text, View, ScrollView, KeyboardAvoidingView, Image, TextInput } from 'react-native';

import { Button, HelperText } from 'react-native-paper';

function LoginScreen() {
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const userNamesList = ['BHEMU', 'AMRITA', 'AMMU', 'ARTIST', 'AMRITAART', 'PUSHPANJAY'];

	const handleLogin = useCallback(async () => {
		const falg = userNamesList.includes(username.trim().toUpperCase());
		if (falg) {
			handleLoginForm(setLoading, setMessage);
		} else {
			setMessage('User not found');
		}
	}, [username]);

	return (
		<KeyboardAvoidingView style={login.background}>
			<View>
				<ScrollView contentContainerStyle={login.wrapper} keyboardShouldPersistTaps="always">
					<Image source={require('../../assets/logo_banner.png')} style={login.brandLogo} />
					<Text style={login.title}>Amrita Arts</Text>
					<TextInput
						style={login.textInput}
						placeholder="User Name"
						keyboardType="default"
						autoComplete="username"
						autoCapitalize="none"
						cursorColor="#f0853d"
						value={username}
						onChangeText={(text) => {
							setUsername(text) & (message ? setMessage('') : null);
						}}
						returnKeyType="next"
						inputMode="text"
					/>
					<Button
						mode="contained"
						loading={loading}
						uppercase
						style={login.loginBtn}
						onPress={handleLogin}
						disabled={loading}
					>
						{!loading ? 'Login' : null}
					</Button>
					<HelperText type="error" visible={!!message} style={login.message}>
						{message}
					</HelperText>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}

export default LoginScreen;
