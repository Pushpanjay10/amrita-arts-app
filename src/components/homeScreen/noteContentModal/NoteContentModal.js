import React from 'react';

import { NoteContentModalStyle } from './NoteContentModalStyle';

import { View, Modal, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { IconButton, Checkbox } from 'react-native-paper';

import NavBar from '../navBar/NavBar';
import NoteContentModalBar from './NoteContentModalBar';

function NoteContentModal({ isNotesModalOpen, handleNoteClosing, openedNoteData, isSaveBtnLoading }) {
	const { notesTitle, noteData } = openedNoteData;
	// console.log(noteData);
	return (
		<Modal
			animationType="slide"
			visible={isNotesModalOpen}
			// transparent={true}
			onRequestClose={handleNoteClosing}
		>
			<View style={NoteContentModalStyle.modal}>
				<NavBar />

				<NoteContentModalBar
					NoteContentModalStyle={NoteContentModalStyle}
					handleNoteClosing={handleNoteClosing}
					isSaveBtnLoading={isSaveBtnLoading}
				/>

				<ScrollView>
					<KeyboardAvoidingView style={NoteContentModalStyle.noteSection}>
						<TextInput
							style={NoteContentModalStyle.noteTitle}
							placeholder="Title"
							cursorColor="#f0853d"
							placeholderTextColor="#ffffff9a"
							autoComplete="off"
							value={notesTitle}
						/>
						{noteData.map((item, index) => {
							return item?.type === 'note' ? (
								<TextInput
									key={item?.type + index}
									style={NoteContentModalStyle.noteText}
									cursorColor="#f0853d"
									placeholderTextColor="#ffffff9a"
									autoComplete="off"
									multiline={true}
									value={item.element}
								/>
							) : (
								<View style={NoteContentModalStyle.todoTextBox} key={item?.type + index}>
									<Checkbox status={item.isDone ? 'checked' : 'unchecked'} />
									<TextInput
										style={NoteContentModalStyle.todoText}
										cursorColor="#f0853d"
										placeholderTextColor="#ffffff9a"
										autoComplete="off"
										multiline={true}
										value={item.element}
									/>
									<IconButton
										icon="close"
										// size={25}
										iconColor="white"
										style={{ marginLeft: -10 }}
										onPress={() => console.log('Pressed')}
									/>
								</View>
							);
						})}
					</KeyboardAvoidingView>
				</ScrollView>
			</View>
		</Modal>
	);
}

export default NoteContentModal;
