import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

//label text passed in as a prop

/*
	style comments:
	- flex property is how we proportion the amount of space to object
	- flex: 1 and flex: 2 --> 1/3 will be allocated to label, 2/3 to input
*/

const Input = ({label, value, onChangeText, placeholder, autoCorrect, secureTextEntry}) => {
	const {inputStyle, labelStyle, containerStyle} = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				autoCorrect={autoCorrect}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export {Input};