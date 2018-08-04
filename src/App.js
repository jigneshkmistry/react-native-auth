import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './compoments/common';
import LoginForm from './compoments/LoginForm';

class App extends Component {

    state = { loggedIn: null }
    firebase;
    componentWillMount() {
        firebase = require("firebase");

        firebase.initializeApp({
            apiKey: "AIzaSyA1UBa4nzao4HkhQCTeuf2hUPTzXU1NHEk",
            authDomain: "authentication-9f367.firebaseapp.com",
            databaseURL: "https://authentication-9f367.firebaseio.com",
            projectId: "authentication-9f367",
            storageBucket: "authentication-9f367.appspot.com",
            messagingSenderId: "1060662094008"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false });
            }
        });
    }

    onLogoutPress() {
        firebase.auth().signOut();
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={this.onLogoutPress.bind(this)}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;