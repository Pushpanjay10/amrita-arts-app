import { StyleSheet } from 'react-native';

const HomeScreenStyle = StyleSheet.create({
	background: {
		// flex: 1,
		alignContent: 'center',
		backgroundColor: '#242526',
		justifyContent: 'flex-end',
		paddingBottom: 70,
		width: '100%',
	},
	Title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginTop: 50,
	},
	selectedImg: {
		height: 300,
		// marginTop: 20,
		resizeMode: 'contain',
	},
	clearImgBtn: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 25,
	},
	uploadBtn: {
		width: '80%',
		alignSelf: 'center',
		marginTop: 20,
	},
	message: {
		alignSelf: 'center',
		fontSize: 15,
	},
	checkBtn: {
		width: '80%',
		alignSelf: 'center',
		marginTop: 20,
	},
	loader: {
		marginVertical: 7,
	},
	deleteBtn: {
		position: 'absolute',
		right: '10%',
	},
});

export { HomeScreenStyle };
