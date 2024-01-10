import React from 'react';
import { View } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';

const NoteContentModalBar = ({ NoteContentModalStyle, handleNoteClosing, isSaveBtnLoading }) => {
	return (
		<View style={NoteContentModalStyle.modalBar}>
			<View style={{ flexDirection: 'row' }}>
				<IconButton
					icon="arrow-left"
					// size={25}
					iconColor="white"
					onPress={handleNoteClosing}
				/>
				{isSaveBtnLoading ? (
					<ActivityIndicator animating={true} color="white" />
				) : (
					<IconButton
						icon="cloud-upload"
						// size={24}
						iconColor="white"
						// loading={true}
						onPress={() => console.log('Pressed')}
					/>
				)}
			</View>
			<IconButton
				icon="playlist-plus"
				// size={24}
				iconColor="white"
				onPress={() => console.log('Pressed')}
			/>
			<IconButton icon="menu" size={24} iconColor="white" onPress={() => console.log('Pressed')} />
		</View>
	);
};

export default NoteContentModalBar;
