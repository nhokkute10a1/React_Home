import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Icon} from 'native-base';

import anh1 from '../../Media/temp/home.jpg';
import iMore from '../../Media/morethan.png';
import styles from '../../Style/style';

export default class Search extends Component {
    render() {
        const {navigate} = this.props.navigation;
        const {
            BackGround, imageStyle, containnerImage, searchContainner, wapperSearch, wapperImage2,
            avatar, searchBody, bodyInfo, txtInfo, bodyCheck, txtCheck, bodySearchView, btnLeft,
            btnRight, txtButton, imgPrice, imgIcon, iconMore
        } = styles;
        return (
            <View style={BackGround}>
                <View style={searchContainner}>
                    <TouchableOpacity
                        style={wapperSearch}
                        onPress={() => this.props.navigation.navigate('PlaceStack')}
                    >
                        <Text>Địa điểm</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={wapperSearch}>
                        <Text>Số người</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={wapperSearch}
                        onPress={() => navigate('CalendarStack')}
                    >
                        <Text>Thời gian</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={searchBody}>
                   <TouchableOpacity onPress={() => navigate('HomeDetailStack')}>
                   {/*<TouchableOpacity>*/}
                        <View style={containnerImage}>
                            <View style={wapperImage2}>
                                <Image source={anh1} style={imageStyle}>
                                    <View style={imgIcon}>
                                        <TouchableOpacity>
                                            <Icon name="md-heart-outline"/>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={imgPrice}>1.000.000đ</Text>
                                </Image>
                            </View>
                            <View style={{flex: 1.5}}>
                                <Image
                                    source={{uri: 'http://ngoisaostar.net/wp-content/uploads/2016/03/avatar-doi-anh-bia-facebook-doi-sieu-kute-2.jpg'}}
                                    style={avatar}
                                />
                                <View style={bodyInfo}>
                                    <View style={txtInfo}>
                                        <Text>Pullman Saigon Centre</Text>
                                        <TouchableOpacity style={{flexDirection: 'row'}}>
                                            <Text>80 đánh giá</Text>
                                            <Image source={iMore} style={iconMore}/>
                                        </TouchableOpacity>

                                        <Icon name="md-heart-outline"/>
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
                            <Image source={anh1} style={imageStyle}>
                                <View style={imgIcon}>
                                    <TouchableOpacity>
                                        <Icon name="md-heart-outline"/>
                                    </TouchableOpacity>
                                </View>
                                <Text style={imgPrice}>1.000.000đ</Text>
                            </Image>
                        </View>
                        <View style={{flex: 1.5}}>
                            <Image
                                source={{uri: 'http://ngoisaostar.net/wp-content/uploads/2016/03/avatar-doi-anh-bia-facebook-doi-sieu-kute-2.jpg'}}
                                style={avatar}
                            />
                            <View style={bodyInfo}>
                                <View style={txtInfo}>
                                    <Text>Pullman Saigon Centre</Text>
                                    <TouchableOpacity style={{flexDirection: 'row'}}>
                                        <Text>80 đánh giá</Text>
                                        <Image source={iMore} style={iconMore}/>
                                    </TouchableOpacity>

                                    <Icon name="md-heart-outline"/>
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
                <View style={bodySearchView}>
                    <View style={btnLeft}>
                        <TouchableOpacity>
                            <Text style={txtButton}>Lọc nâng cao</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={btnRight}>
                        <TouchableOpacity>
                            <Text style={txtButton}>Bản đồ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
