import React, { useCallback, useEffect, useState } from 'react';

import { HomeScreenStyle } from '../styles/HomeScreenStyle';

// import { handleSignOut } from '../firebase/auth';
import { handleUpload, handleGetAllImage, handleDeleteImage } from '../firebase/home';

import { View, Image, Text, ScrollView, Linking } from 'react-native';

import { Button, HelperText, IconButton, MD3Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

// import { ActivityIndicator, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';

let localStorageNotesData;
try {
	AsyncStorage.getItem('note_data', (err, result) => {
		localStorageNotesData = JSON.parse(result);
	});
} catch (error) {
	console.log('localStorageNotesData', error);
}

const HomeScreen = () => {
	const netInfo = useNetInfo();
	const [image, setImage] = useState(null);
	const [message, setMessage] = useState({ text: '', type: '' });
	const [allImage, setAllImg] = useState(localStorageNotesData || []);
	const [isUploadBtnLoading, setIsUploadBtnLoading] = useState(false);
	const [isFetchAllImgLoading, setIsFetchAllImgLoading] = useState(false);

	const handleMsgShown = useCallback((msgText, type) => {
		let msgType = type || 'error';
		if (msgText) {
			setMessage({ text: msgText, type: msgType });
			setTimeout(() => {
				setMessage({ text: '', type: '' });
			}, 2500);
		} else {
			console.log('handleMsgShown:', 'Please Provide Text Msg');
		}
	}, []);

	// fetch All noteData
	useEffect(() => {
		handleGetAllImage(setAllImg, setIsFetchAllImgLoading, handleMsgShown, netInfo);
	}, [handleMsgShown, netInfo]);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
		// You can also use as a promise without 'callback':
	};

	const handleUploadBtn = useCallback(async () => {
		if (image) {
			const response = await fetch(image);
			const blob = await response.blob();
			var filename = image.substring(image.lastIndexOf('/') + 1, image.length);

			handleUpload(blob, filename, setImage, setMessage, setIsUploadBtnLoading);
		} else {
			handleMsgShown('Please select an image first');
			console.log('Please select an image first');
		}
	}, [image, handleMsgShown]);

	const handleCheckBtn = useCallback(() => {
		Linking.openURL('https://www.amritaart.live/').catch((err) => {
			console.error("Couldn't load page", err);
			handleMsgShown("Couldn't load page");
		});
	}, [handleMsgShown]);

	return (
		<SafeAreaView style={{ backgroundColor: '#151515' }}>
			<ScrollView
				contentContainerStyle={HomeScreenStyle.background}
				stickyHeaderIndices={[1]}
				showsVerticalScrollIndicator={false}
			>
				<Text style={HomeScreenStyle.Title}>Amrita Arts</Text>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
					<Button onPress={pickImage} mode="contained">
						Pick an image from camera roll
					</Button>
					{image && (
						<View style={{ marginTop: 10 }}>
							<Image source={{ uri: image }} style={HomeScreenStyle.selectedImg} />
							<IconButton
								icon="close"
								size={30}
								mode="outlined"
								style={HomeScreenStyle.clearImgBtn}
								iconColor={MD3Colors.error50}
								onPress={() => setImage(null)}
							/>
						</View>
					)}
				</View>

				<Button
					style={HomeScreenStyle.uploadBtn}
					loading={isUploadBtnLoading}
					onPress={handleUploadBtn}
					mode="outlined"
				>
					Upload
				</Button>
				<Button loading={isFetchAllImgLoading} onPress={handleCheckBtn} style={HomeScreenStyle.checkBtn}>
					Check on website
				</Button>
				<HelperText type="error" visible={!!message} style={HomeScreenStyle.message}>
					{message.text}
				</HelperText>
				{allImage.map((item, index) => (
					<View key={index}>
						<Image
							source={{ uri: item.img_url }}
							style={{ width: '80%', height: 300, marginBottom: 10, alignSelf: 'center' }}
						/>
						<IconButton
							icon="delete"
							size={30}
							mode="contained"
							style={HomeScreenStyle.deleteBtn}
							iconColor={MD3Colors.error50}
							onPress={() => handleDeleteImage(item.imgId, handleMsgShown, netInfo)}
						/>
					</View>
				))}

				{/* <Button onPress={handleSignOut}>Logout</Button> */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
