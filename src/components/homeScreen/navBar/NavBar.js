import React from 'react';
import { View, Text } from 'react-native';

import { NavBarStyle } from './NavBarStyle';

import { Appbar, Avatar, Button } from 'react-native-paper';

function NavBar({ addNotes }) {
	return (
		<Appbar style={NavBarStyle.NavBar}>
			<View style={NavBarStyle.brandSection}>
				<Avatar.Image
					size={33}
					style={NavBarStyle.menuIcon}
					source={require('../../../../assets/navbarLogo.png')}
					onPress={() => console.log('Pressed')}
				/>
				<Text style={NavBarStyle.navbarTitle}>Bhemu Notes</Text>
			</View>
			<Button
				mode="contained-tonal"
				style={NavBarStyle.addNotesBtn}
				buttonColor="rgb(102, 187, 106)"
				compact
				maxFontSizeMultiplier={1}
				uppercase
				onPress={addNotes}
			>
				Add Notes
			</Button>
		</Appbar>
	);
}

export default NavBar;
