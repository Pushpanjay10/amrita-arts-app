import { StyleSheet } from 'react-native';

const NoteListBoxStyle = StyleSheet.create({
	noteBox: {
		alignContent: 'center',
		alignSelf: 'center',
		borderRadius: 15,
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginVertical: 5,
		width: '95%',
		backgroundColor: '#dc5f73',
	},
	noteTitle: {
		fontSize: 16.5,
		fontWeight: '500',
		marginBottom: 3.5,
		overflow: 'hidden',
		color: 'white',
	},
	noteContent: {
		marginBottom: 5,
		overflow: 'hidden',
		height: 38,
	},
	noteContentText: {
		fontSize: 14,
		fontWeight: '400',
		color: 'white',
	},
	noteDate: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	noteDateText: {
		fontSize: 12,
		fontWeight: '500',
		color: 'white',
	},
	noteTimeText: {
		fontSize: 12,
		fontWeight: '500',
		color: 'white',
	},
});

export { NoteListBoxStyle };
