import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
	Style Notes:
	flex-direction: row --> puts everthing in a row
	flex-direction: column --> puts everthing in a column

*/

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
}

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start', //push to start of container (left)
		flexDirection: 'row', //layout all in a row
		borderColor: '#ddd',
		position: 'relative'
	}
}

export {CardSection};