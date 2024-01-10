import { StyleSheet } from 'react-native';

const NavBarStyle = StyleSheet.create({
	NavBar: {
		// flex: 1,
		backgroundColor: '#151515',
		width: '100%',
		minHeight: 45,
		maxHeight: 45,
		alignItems: 'center',
		justifyContent: 'space-between',
		// elevation: 5,
		borderBottomWidth: 0.5,
		borderColor: 'rgba(255, 255, 255, 0.3)',
	},
	brandSection: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	menuIcon: {
		marginHorizontal: 10,
		backgroundColor: 'white',
	},
	addNotesBtn: {
		marginHorizontal: 7,
		// paddingHorizontal: 10,
		fontSize: 10,
		transform: [{ scaleX: 0.81 }, { scaleY: 0.81 }],

		borderRadius: 7,
	},
	navbarTitle: {
		color: 'white',
		fontSize: 16,
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
	showPassword: {
		flexDirection: 'row',
		marginBottom: 20,
		alignSelf: 'flex-start',
		marginLeft: '7%',
		// backgroundColor: 'red',
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
	forgotPass: {
		alignSelf: 'center',
		marginTop: 15,
		padding: 5,
		// backgroundColor: 'red',
	},
	singupBtn: {
		borderTopColor: 'rgba(255, 255, 255, 0.3)',
		borderTopWidth: 0.5,
		marginTop: 120,
		paddingVertical: 15,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		width: '100%',
		// backgroundColor: 'blue',
	},
});

export { NavBarStyle };
