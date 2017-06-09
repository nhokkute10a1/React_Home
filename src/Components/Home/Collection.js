import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import anh1 from '../../Media/temp/home.jpg';

import styles from '../../Style/style';

export default class Collection extends Component {

    render() {
        const {
            imageStyle, wapperImage, titleText, wapperImage1, wapperImage2
        } = styles;
        return (
            <View style={wapperImage}>
                <View style={wapperImage1}>
                    <Text style={titleText}>HOMESTAY COLLECTION</Text>
                </View>
                <View style={wapperImage2}>
                    <Image source={anh1} style={imageStyle} />
                </View>
            </View>

        );
    }
}

