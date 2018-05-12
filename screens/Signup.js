import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, } from 'react-native';

import Auth from '../services/Auth';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            success: false,
            loading: false,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder={'Name'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder={'Email'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Signup'}
                    style={styles.input}
                    onPress={Auth.signup.bind(this)}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});