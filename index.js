//have to do this here so i do not get error
//alternatively I can use npm install --save firebase@5.0.3 - because later versions break Android emulator

import firebase from 'firebase'; 
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('auth', () => App);