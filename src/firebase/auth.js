import { auth } from './firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

async function handleLoginForm(setLoading, setMessage) {
	setLoading(true);

	try {
		await signInWithEmailAndPassword(auth, 'anonymous@bhemu.com', 'bhemu3699')
			.then()
			.catch((error) => {
				console.log('handleLoginForm_1', error);
				setMessage(error.code);
			});
	} catch (error) {
		console.log('handleLoginForm_2', error);
	} finally {
		setLoading(false);
	}
}

// async function handleUserSignup(fullName, email, password, confirmPassword, setLoading, setMessage) {
// 	if (!fullName || !email || !password || !confirmPassword) {
// 		setMessage('Please enter your all details');
// 		return;
// 	} else if (password !== confirmPassword) {
// 		setMessage('Password does not match');
// 		return;
// 	}

// 	setLoading(true);

// 	try {
// 		const docRef = doc(database, 'user_details', email);
// 		await createUserWithEmailAndPassword(auth, email, password)
// 			.then((cred) => {
// 				sendEmailVerification(cred.user).then(() => {
// 					// setMessage('Email verification sent. Please also check in spam');
// 				});
// 				updateProfile(cred.user, { displayName: fullName })
// 					.then(() => {
// 						setDoc(docRef, {
// 							fullName,
// 							email,
// 							createdOn: serverTimestamp(),
// 							lastloginedOn: serverTimestamp(),
// 						})
// 							.then(async () => {
// 								setMessage('Signup successful. Please login now');
// 								await AsyncStorage.setItem(
// 									'user_details',
// 									JSON.stringify({
// 										fullName,
// 										email,
// 										userId: cred?.user?.uid,
// 									})
// 								);
// 							})
// 							.catch((err) => {
// 								setMessage(err.code);
// 								console.log('handleUserSignup_1', err.code);
// 							});
// 					})
// 					.catch((err) => {
// 						setMessage(err.code);
// 						console.log('handleUserSignup_2', err.code);
// 					});
// 			})
// 			.catch((error) => {
// 				setMessage(error.code);
// 				console.log('handleUserSignup_3', error);
// 			});
// 	} catch (error) {
// 		console.log('handleUserSignup_4', error);
// 	} finally {
// 		setLoading(false);
// 	}
// }

// async function handleForgetPassword(email, setLoading, setMessage) {
// 	if (!email) {
// 		setMessage('Please enter your email');
// 		return;
// 	}
// 	setLoading(true);
// 	sendPasswordResetEmail(auth, email)
// 		.then(() => {
// 			setLoading(false);
// 			setMessage('Password reset email sent. Please also check spam');
// 		})
// 		.catch((error) => {
// 			setLoading(false);
// 			setMessage(error.code);
// 			console.log('handleForgetPassword', error.code);
// 		});
// }

async function handleSignOut() {
	signOut(auth)
		.then(() => {
			AsyncStorage.clear();
		})
		.catch((err) => {
			console.log('handleSignOut', err.code);
		});
}

function handleUserState(setUser) {
	onAuthStateChanged(auth, (user) => {
		setUser(user ? 'logged' : 'signIn');
	});
}

export { handleLoginForm, handleUserState, handleSignOut };
