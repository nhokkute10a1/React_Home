import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput
} from 'react-native';

import styles from '../../Style/style';


export default class SignIn extends Component {
    render() {
        const {
            inputStyle, btnsignIn
        } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle} placeholder="Enter your email"
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={inputStyle} placeholder="Enter your password"
                    underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity style={btnsignIn} >
                    <Text style={{ color: '#FFF' }}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}