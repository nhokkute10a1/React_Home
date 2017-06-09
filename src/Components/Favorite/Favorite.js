import React, {Component} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';
import {Icon} from  'native-base';

import anh1 from '../../Media/temp/home.jpg';
import iMore from '../../Media/morethan.png';
import styles from '../../Style/style';

export default class Favorite extends Component {
    render() {
        const {navigate} = this.props.navigation;
        const {
            BackGround, imageStyle, containnerImage, imgIcon, imgPrice, wapperImage2,
            avatar,bodyInfo,txtInfo,iconMore,bodyCheck,txtButton,txtCheck
        } = styles;
        return (
            <ScrollView style={BackGround}>
                <TouchableOpacity onPress={() => navigate('HomeDetail')}>
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
        );
    }
}
