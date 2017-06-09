import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
// import { Thumbnail } from 'native-base';

import Logout from './../../Media/Logout.png';

import styles from './../../Style/style';

export default class Menu extends Component {
    render() {
        const {textPro, iconIma, avatar, textStyle} = styles;
        return (
            <View>
                <Image
                    source={{uri: 'http://file.vforum.vn/hinh/2016/04/texure-hieu-ung-bokeh-dep-cho-photoshop-3.jpg'}}
                    style={styles.image}
                />
                <View>
                    <Image
                        source={{uri: 'http://1.bp.blogspot.com/-AD2QKRpmnNk/VOFKKAfGagI/AAAAAAAAAog/tJiOxk2T03c/s1600/avatar%2B(1).jpg'}}
                        style={avatar}
                    />
                    <Text style={styles.text}>
                        Trang thông tin
                    </Text>
                </View>
                <View >
                    <Text style={textStyle}>Địa chỉ: </Text>
                    <Text style={textStyle}>SDT: </Text>
                    <Text style={textStyle}>Email: </Text>
                </View>
                <View style={{padding: 10, height: 50}}>
                    <Image
                        source={Logout}
                        style={iconIma}
                    />
                    <Text style={textPro}>Đăng xuất</Text>
                </View>
            </View>
    );
    }
    }
