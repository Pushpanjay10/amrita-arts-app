import { storage, database } from './firebaseConfig';

import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import {
	setDoc,
	doc,
	deleteDoc,
	collection,
	onSnapshot,
	getDocs,
	query,
	serverTimestamp,
	orderBy,
} from 'firebase/firestore';

async function handleUpload(imageUpload, filename, setImage, setMsg, setIsSaveBtnLoading) {
	setIsSaveBtnLoading(true);
	const imageRef = ref(storage, filename);
	const docRef = doc(database, 'picture_links', filename);

	// const docRef = doc(database, 'user_details', auth?.currentUser?.email);
	uploadBytesResumable(imageRef, imageUpload)
		.then((snapshot) => {
			getDownloadURL(snapshot.ref)
				.then((downloadURL) => {
					setDoc(docRef, {
						img_url: downloadURL,
						filename: filename,
						updatedOn: serverTimestamp(),
						createdOn: serverTimestamp(),
					}).then(() => {
						setImage(null);
						setIsSaveBtnLoading(false);
					});
				})
				.catch((err) => {
					setIsSaveBtnLoading(false);
					console.log(err.message);
					setMsg(err.code);
				});
		})
		.catch((err) => {
			setIsSaveBtnLoading(false);
			console.log(err.message);
			setMsg(err.code);
		})
		.finally(() => {
			setIsSaveBtnLoading(false);
		});
}

async function handleGetAllImage(setAllImg, setIsFetchAllImgLoading, handleMsgShown, netInfo) {
	if (!netInfo?.isConnected) {
		console.log('getUserAllNoteData:- Please check your internet connection');
		// setIsFetchNotLoading(false);
		return handleMsgShown('Please check your internet connection');
	}

	const colRef = collection(database, 'picture_links');

	const getDataQuery = query(colRef, orderBy('updatedOn', 'desc')); // orderBy('name', 'desc || ase')
	setIsFetchAllImgLoading(true);
	onSnapshot(
		colRef,
		async () => {
			await getDocs(getDataQuery)
				.then((snapshot) => {
					let allImgData = [];
					snapshot.docs.forEach((doc) => {
						allImgData.push({
							imgId: doc.id,
							updatedOn: doc.data().updatedOn,
							img_url: doc.data()?.img_url,
							filename: doc.data().filename,
						});
					});
					setIsFetchAllImgLoading(false);
					setAllImg(allImgData);
				})
				.catch((err) => {
					setIsFetchAllImgLoading(false);
					console.log(err.message);
					handleMsgShown(err.code);
				});
		},
		(err) => {
			setIsFetchAllImgLoading(false);
			console.log(err);
			handleMsgShown(err.code);
		}
	);
}

async function handleDeleteImage(imgId, handleMsgShown, netInfo) {
	if (!netInfo?.isConnected) {
		console.log('getUserAllNoteData:- Please check your internet connection');
		// setIsFetchNotLoading(false);
		return handleMsgShown('Please check your internet connection');
	}

	const desertRef = ref(storage, imgId);

	deleteObject(desertRef)
		.then(async () => {
			await deleteDoc(doc(database, 'picture_links', imgId))
				.then(() => {
					console.log('Document successfully deleted!');
					handleMsgShown('Image deleted successfully');
				})
				.catch((error) => {
					console.error('Error removing document: ', error);
					handleMsgShown(error.code);
				});
		})
		.catch((error) => {
			console.log('File deleted error', error);
			handleMsgShown(error.code);
			// Uh-oh, an error occurred!
		});
}

export { handleUpload, handleGetAllImage, handleDeleteImage };
