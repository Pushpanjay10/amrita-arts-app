import { StyleSheet } from 'react-native';

const login = StyleSheet.create({
	background: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	wrapper: {},
	brandLogo: {
		height: 100,
		aspectRatio: 2 / 1,
		alignSelf: 'center',
		marginTop: 50,
		// backgroundColor: 'white',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 30,
	},
	textInput: {
		height: 40,
		minWidth: '86%',
		maxWidth: '86%',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		alignSelf: 'center',
		borderRadius: 9,
		marginBottom: 20,
		paddingHorizontal: 10,
		fontSize: 16,

		// elevation: 20,
		// shadowColor: '#f1f1f1',
	},
	loginBtn: {
		width: '86%',
		alignSelf: 'center',
	},
	message: {
		alignSelf: 'center',
		fontSize: 15,
		// backgroundColor: 'red',
	},
});

export { login };
