import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

//import all components from common folder - made possible through common/index.js
import { Button, Card, CardSection, Input, Spinner } from './common'; 

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
	state = {email: '', password: '', error: '', loading: false};

	//authenticate user
	onButtonPress() {

		//after button click, we want to show spinner instead of button - use loading state

		const {email, password} = this.state;
		this.setState({error: '', loading: true}); //null out error on re-attempt //loading true will show spinner


		/*
			returns a promise because it takes time to complete request
			then() --> what happens when it succeeds
			catch() --> what happens when it fails

			not sure what .bind is doing at the moment 7-24
		*/

		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				//catch statement is what happens if it fails - if in here, signin failed
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	//what we will do when user does login
	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});	
	}

	//failed to create account - show error message
	onLoginFail() {
		this.setState({error: 'Authentication Failed.', loading: false});	
	}

	//helper method that returns JSX to show spinner or button tag
	renderButton() {
		if (this.state.loading) {
			return <Spinner size="small"/>;
		}
		else {
			return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Login
				</Button>
			);
		}
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
					{this.renderButton()}	
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