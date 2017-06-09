import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, TextInput
} from 'react-native';

import styles from '../../Style/style';


export default class SignUp extends Component {
    render() {
        const {
            inputStyle, btnsignIn
        } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle} placeholder="Enter your name"
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={inputStyle} placeholder="Enter your email"
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={inputStyle} placeholder="Enter your password"
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={inputStyle} placeholder="Re-enter your password"
                    underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity style={btnsignIn}>
                    <Text style={{ color: '#FFF' }}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}