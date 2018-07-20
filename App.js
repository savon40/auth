/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; //imported here and in index.js 
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        //initialize firebase when app first loads
        firebase.initializeApp({
            apiKey: 'AIzaSyAkJKALX0YcMocFN6mZjZ6X4aw7Ixnl1GQ',
            authDomain: 'authentication-a03a1.firebaseapp.com',
            databaseURL: 'https://authentication-a03a1.firebaseio.com',
            projectId: 'authentication-a03a1',
            storageBucket: 'authentication-a03a1.appspot.com',
            messagingSenderId: '647880688768'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}