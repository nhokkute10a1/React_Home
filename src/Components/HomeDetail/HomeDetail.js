import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { TabsInfo } from '../Router/TabInfor';

import iBanner1 from '../../Media/temp/anh1.jpg';
import iBanner2 from '../../Media/temp/anh2.jpg';
import iBanner3 from '../../Media/temp/anh3.jpg';
import iBanner4 from '../../Media/temp/anh4.jpg';
import map from '../../Media/appIcon/map.png';


import styles from '../../Style/style';

const { width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

export default class HomeDetail extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const {
            BackGround, imageStyle, containerDetail, mapStyle, bannerImage, avatar, mapContainer,
            viewTab, checkoutButton, checkoutTitle
        } = styles;
        return (
            <View style={BackGround}>
                <ScrollView >
                    <View style={containerDetail}>
                        <View style={bannerImage}>
                            <Swiper
                                autoplayTimeout={5}
                                showsPagination width={imageWidth}
                                height={imageHeight}
                            >
                                <Image source={iBanner1} style={imageStyle} />
                                <Image source={iBanner2} style={imageStyle} />
                                <Image source={iBanner3} style={imageStyle} />
                                <Image source={iBanner4} style={imageStyle} />
                            </Swiper>
                        </View>
                        <View>
                            <View>
                                <Image
                                    source={{ uri: 'http://ngoisaostar.net/wp-content/uploads/2016/03/avatar-doi-anh-bia-facebook-doi-sieu-kute-2.jpg' }}
                                    style={avatar}
                                />
                                <View style={{ left: 85, marginTop: 5 }}>
                                    <Text>NAME HOST</Text>
                                    <Text>250$</Text>
                                </View>
                            </View>
                            <View style={mapContainer}>
                                <Image source={map} style={mapStyle} />
                            </View>
                        </View>
                        <View style={viewTab}>
                            <TabsInfo />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={checkoutButton}
                    onPress={() => navigate('CheckoutStack')}
                >
                    <Text style={checkoutTitle}> Đặt Phòng </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
