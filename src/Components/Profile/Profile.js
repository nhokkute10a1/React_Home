import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './../../Style/style';

import Rights from './../../Media/Right.png';
import Guide from './../../Media/Trekking.png';
import Settings from './../../Media/Settings.png';
import Help from './../../Media/Help.png';

export default class Profile extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { BackGround, wapper, avatar, viewInf, iconLeft, wapper1, textPro, iconLeftPro,
            iconIma, viewPro }
            = styles;
        return (
            <View style={BackGround}>
                {/*<Text style={titleStyle}>Profile</Text>*/}
                <View style={wapper}>
                    <Image
                        source={{ uri: 'http://ngoisaostar.net/wp-content/uploads/2016/03/avatar-doi-anh-bia-facebook-doi-sieu-kute-2.jpg' }}
                        style={avatar}
                    />
                    <View style={viewInf}>
                        <Text style={{ color: '#23AF4C' }}>Tên tài khoản</Text>
                        <Text>Xem và sửa thông tin cá nhân</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                        <Image source={Rights} style={iconLeftPro} />
                    </TouchableOpacity>
                </View>
                <View style={wapper1}>
                    <View style={viewPro} >
                        <Image
                            source={Guide}
                            style={iconIma}
                        />
                        <Text style={textPro}>Cẩm nang du lịch</Text>
                        <Image source={Rights} style={iconLeft} />

                    </View>
                    <View style={viewPro} >
                        <Image
                            source={Settings}
                            style={iconIma}
                        />
                        <Text style={textPro}>Cài đặt</Text>
                        <Image source={Rights} style={iconLeft} />
                    </View>
                    <View style={viewPro} >
                        <Image
                            source={Help}
                            style={iconIma}
                        />
                        <Text style={textPro}>Hổ trợ</Text>
                        <Image source={Rights} style={iconLeft} />
                    </View>

                </View>
            </View>
        );
    }

}
