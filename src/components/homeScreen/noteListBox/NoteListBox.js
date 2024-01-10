import React from 'react';
import { NoteListBoxStyle } from './NoteListBoxStyle';

import { View, Text, TouchableOpacity } from 'react-native';

const NoteListBox = ({ index, openedNote, handleNoteOpening }) => {
	const { notesTitle, noteData, updatedOn } = openedNote;

	return (
		<TouchableOpacity
			style={NoteListBoxStyle.noteBox}
			activeOpacity={1}
			onPress={() => handleNoteOpening(index, openedNote)}
		>
			<Text style={NoteListBoxStyle.noteTitle}>{notesTitle}</Text>
			<View style={NoteListBoxStyle.noteContent}>
				{noteData.length <= 2 && noteData[0]?.element === '' ? (
					<Text style={NoteListBoxStyle.noteContentText}>Empty.......</Text>
				) : (
					<>
						<Text
							style={NoteListBoxStyle.noteContentText}
							numberOfLines={noteData[0]?.type === 'note' ? 2 : 1}
						>
							{noteData[0]?.type === 'todo' ? '\u25CF ' + noteData[0]?.element : noteData[0]?.element}
						</Text>

						<Text style={NoteListBoxStyle.noteContentText} numberOfLines={1}>
							{noteData[1]?.type === 'todo' ? '\u25CF ' + noteData[1]?.element : noteData[1]?.element}
						</Text>
					</>
				)}
			</View>
			<View style={NoteListBoxStyle.noteDate}>
				<Text style={NoteListBoxStyle.noteDateText}>
					{new Date(updatedOn?.seconds * 1000).toLocaleString('en-US') !== 'Invalid Date'
						? new Date(updatedOn?.seconds * 1000).toLocaleString('en-US', {
								hour: '2-digit',
								minute: '2-digit',
								hour12: true,
						  })
						: new Date().toLocaleString('en-US', {
								hour: '2-digit',
								minute: '2-digit',
								hour12: true,
						  })}
				</Text>
				<Text style={NoteListBoxStyle.noteTimeText}>
					{new Date(updatedOn?.seconds * 1000)?.toLocaleDateString('en-US') !== 'Invalid Date'
						? new Date(updatedOn?.seconds * 1000)?.toLocaleDateString(undefined, {
								day: '2-digit',
								month: 'long',
								year: 'numeric',
						  })
						: new Date()?.toLocaleDateString('en-US', {
								day: '2-digit',
								month: 'long',
								year: 'numeric',
						  })}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NoteListBox;
