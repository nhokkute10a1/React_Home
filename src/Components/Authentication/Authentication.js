import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native';

import styles from '../../Style/style';
import SignIn from './SignIn';
import SignUp from './SignUp';

import iBack from '../../Media/appIcon/back_white.png';
import iLogo from '../../Media/appIcon/ic_logo.png';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    signIn() {
        this.setState({ isSignIn: true });
    }
    signUp() {
        this.setState({ isSignIn: false });
    }
    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        const {
            authentication, signOutStyle, signInStyle, iconStyleAuthe,
            controlStyle, rowAuthen, titleStyleAuthe, inActiveStyle, activeStyle,
        } = styles;
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? (<SignIn />) : (<SignUp />);
        return (
            <View style={authentication}>
                <View style={rowAuthen}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={iBack} style={iconStyleAuthe} />
                    </TouchableOpacity>
                    <Text style={titleStyleAuthe}> Home Stay</Text>
                    <Image source={iLogo} style={iconStyleAuthe} />
                </View>

                {mainJSX}

                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inActiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signOutStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inActiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
