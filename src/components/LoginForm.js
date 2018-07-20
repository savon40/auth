import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

//import all components from common folder - made possible through common/index.js
import { Button, Card, CardSection } from './common'; 

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<TextInput style={{height: 20, width: 100}} />
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>Login</Button>
				</CardSection>

			</Card>
		);
	}
}

export default LoginForm;