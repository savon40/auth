import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//props passes data from parent to child

// make a component - return JSX component
const Header = (props) => {
	const {textStyle, viewStyle} = styles;
	return (
		<View style = {viewStyle}>
	        <Text style = {textStyle}>
	          {props.headerText}
	        </Text>
	    </View>
    );
};

const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 1},
		shadowOpacity: 0.2, //for iOS
		elevation: 10, //for Android
		position: 'relative'
	}
}

export {Header};