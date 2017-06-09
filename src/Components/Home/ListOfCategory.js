import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import iBanner1 from '../../Media/temp/fit.jpg';
import iBanner2 from '../../Media/temp/little.jpg';
import iBanner3 from '../../Media/temp/maxi.jpg';
import iBanner4 from '../../Media/temp/midi.jpg';


import styles from '../../Style/style';

const { width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

export default class ListOfCategory extends Component {

    render() {
        const {
            imageStyle, wapperImage, titleText, wapperImage1, wapperImage2, cateTitle
        } = styles;
        return (
            <View style={wapperImage}>
                <View style={wapperImage1}>
                    <Text style={titleText}>DANH MỤC CÁC LOẠI </Text>
                </View>
                <View style={wapperImage2}>
                    <Swiper showsPagination width={imageWidth} height={imageHeight} >
                        <Image source={iBanner1} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={iBanner2} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={iBanner3} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={iBanner4} style={imageStyle} >
                            <Text style={cateTitle}>Maxi Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}