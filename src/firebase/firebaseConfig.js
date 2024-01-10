import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyDz6s-RX--bVq53JHaxMC10VYmi9sXTA-U',
	authDomain: 'amrita-arts-1c623.firebaseapp.com',
	projectId: 'amrita-arts-1c623',
	storageBucket: 'amrita-arts-1c623.appspot.com',
	messagingSenderId: '287842658900',
	appId: '1:287842658900:web:cd7f5a0787faf034315bc1',
	measurementId: 'G-BQRCV4C1RX',
};

const app = initializeApp(firebaseConfig);
const database = getFirestore();
const storage = getStorage(app);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { app, database, auth, storage };
