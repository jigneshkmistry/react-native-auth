import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './compoments/common';
import LoginForm from './compoments/LoginForm';

class App extends Component {

    componentWillMount() {
        const firebase = require("firebase");
        firebase.initializeApp({
            apiKey: "AIzaSyA1UBa4nzao4HkhQCTeuf2hUPTzXU1NHEk",
            authDomain: "authentication-9f367.firebaseapp.com",
            databaseURL: "https://authentication-9f367.firebaseio.com",
            projectId: "authentication-9f367",
            storageBucket: "authentication-9f367.appspot.com",
            messagingSenderId: "1060662094008"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;