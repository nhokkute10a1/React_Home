import React, { Component } from 'react';
import { View, Text } from 'react-native';

import  styles from  '../../Style/style';

export default class Inbox extends Component {
    render() {
        const { BackGround } = styles;
        return (
            <View style={BackGround}>
                <Text>InBox</Text>
            </View>
        );
    }
}
