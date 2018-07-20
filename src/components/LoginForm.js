import React, { Component } from 'react';
// import { View, TextInput } from 'react-native';

//import all components from common folder - made possible through common/index.js
import { Button, Card, CardSection, Input } from './common'; 

/*
	Path of TextInput:
		- User types Text
		- onChageText event called
		- 'setState' with new text
		- Component rerenders
		- when TextInput rerenders, we tell it that its value is 'this.state.text'
*/

class LoginForm extends Component {

	// add state to component
	state = {email: '', password: ''};

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						autoCorrect={false}
						label="Email"
						value ={this.state.email}
						onChangeText={email => this.setState({email})}
					/>
				</CardSection>

				<CardSection>
					<Input
						placeholder="password"
						autoCorrect={false}
						label="Password"
						value ={this.state.password}
						onChangeText={password => this.setState({password})}
						secureTextEntry
					/>
				</CardSection>

				<CardSection>
					<Button>Login</Button>
				</CardSection>

			</Card>
		);
	}
}

export default LoginForm;