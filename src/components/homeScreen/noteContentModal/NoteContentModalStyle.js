import { StyleSheet } from 'react-native';

const NoteContentModalStyle = StyleSheet.create({
	modal: {
		backgroundColor: '#242526',
		flex: 1,
		// minHeight: '100%',
	},
	modalBar: {
		alignItems: 'center',
		// backgroundColor: 'red',
		flexDirection: 'row',
		height: 40,
		justifyContent: 'space-between',
		// marginHorizontal: 8,
	},
	noteTitle: {
		// backgroundColor: 'blue',
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		marginHorizontal: 15,
		marginBottom: 5,
	},
	noteSection: {
		// backgroundColor: 'blue',
		// flex: 1,
		marginBottom: 100,
	},
	noteText: {
		color: 'white',
		fontSize: 15,
		// backgroundColor: 'red',
		marginHorizontal: 16,
		// paddingRight: 5,
	},
	todoTextBox: {
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: 'green',
		marginHorizontal: 7,
	},
	todoText: {
		display: 'flex',
		color: 'white',
		fontSize: 15,
		// backgroundColor: 'red',
		marginLeft: 2,
		marginVertical: 5,
		paddingRight: 5,
		width: '82%',
	},
});

export { NoteContentModalStyle };
