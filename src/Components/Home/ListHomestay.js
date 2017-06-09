import React, { Component } from 'react';
import {
    View, Text, Image,
    TouchableOpacity, ScrollView
} from 'react-native';
import { Icon } from 'native-base';
import styles from '../../Style/style';

import sp1 from '../../Media/temp/anh1.jpg';
import iMore from '../../Media/morethan.png';

export default class ListHomestay extends Component {
    openHomeDetail() {
        const { navigate } = this.props.navigation;
        navigate('MH_HomeDetail');
    }

    render() {
        const {
            BackGround, titleTop, txtButton, searchBody, containnerImage, bodyCheck,
            wapperImage2, avatar, imgPrice, bodyInfo, txtInfo, txtCheck, imgIcon, iconMore,
            imageStyle
        } = styles;
        return (
            <View style={BackGround}>
                <View style={titleTop}>
                    <Text style={txtButton}>TP Hồ Chí Minh</Text>
                </View>
                <ScrollView style={searchBody}>
                    <TouchableOpacity onPress={this.openHomeDetail.bind(this)}>
                        <View style={containnerImage}>
                            <View style={wapperImage2}>
                                <Image source={sp1} style={imageStyle}>
                                    <View style={imgIcon}>
                                        <TouchableOpacity>
                                            <Icon name="md-heart-outline" />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={imgPrice}>1.000.000đ</Text>
                                </Image>
                            </View>
                            <View style={{ flex: 1.5 }}>
                                <Image
                                    source={{ uri: 'http://ngoisaostar.net/wp-content/uploads/2016/03/avatar-doi-anh-bia-facebook-doi-sieu-kute-2.jpg' }}
                                    style={avatar}
                                />
                                <View style={bodyInfo}>
                                    <View style={txtInfo}>
                                        <Text>Pullman Saigon Centre</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                                            <Text>80 đánh giá</Text>
                                            <Image source={iMore} style={iconMore} />
                                        </TouchableOpacity>

                                        <Icon name="md-heart-outline" />
                                    </View>
                                    <View style={bodyCheck}>
                                        <TouchableOpacity style={txtCheck}>
                                            <Text style={txtButton}>Đặt phòng</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={containnerImage}>
                        <View style={wapperImage2}>
                            <Image source={sp1} style={imageStyle}>
                                <View style={imgIcon}>
                                    <TouchableOpacity>
                                        <Icon name="md-heart-outline" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={imgPrice}>1.000.000đ</Text>
                            </Image>
                        </View>
                        <View style={{ flex: 1.5 }}>
                            <Image
                                source={{ uri: 'http://ngoisaostar.net/wp-content/uploads/2016/03/avatar-doi-anh-bia-facebook-doi-sieu-kute-2.jpg' }}
                                style={avatar}
                            />
                            <View style={bodyInfo}>
                                <View style={txtInfo}>
                                    <Text>Pullman Saigon Centre</Text>
                                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                                        <Text>80 đánh giá</Text>
                                        <Image source={iMore} style={iconMore} />
                                    </TouchableOpacity>

                                    <Icon name="md-heart-outline" />
                                </View>
                                <View style={bodyCheck}>
                                    <TouchableOpacity style={txtCheck}>
                                        <Text style={txtButton}>Đặt phòng</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
