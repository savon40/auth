import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

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
	state = {email: '', password: '', error: ''};

	//authenticate user
	onButtonPress() {
		const {email, password} = this.state;
		this.setState({error: ''}); //null out error on re-attempt

		//returns a promise because it takes time to complete request
		firebase.auth().signInWithEmailAndPassword(email,password)
			.catch(() => {
				//catch statement is what happens if it fails - if in here, signin failed
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						//failed to create account - show error message
						this.setState({error: 'Authentication Failed.'});
					});
			});
	}

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

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
}

export default LoginForm;