import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

import styles from '../../Style/style';

import hinh1 from '../../Media/temp/hinh1.jpg';
import hinh2 from '../../Media/temp/hinh2.jpg';
import hinh3 from '../../Media/temp/hinh3.jpg';
import hinh4 from '../../Media/temp/hinh4.jpg';

const { width } = Dimensions.get('window');

export default class Area extends Component {

    render() {
      //  const { navigate } = this.props.navigation;
        const {
            containner, wapperImage1, body, homeImage, homeName,
            homePrice, titleText
            } = styles;
        return (
            /**
               * Như vậy bên đây đã nhận props openHomeStay
                        với tên viết la openDetail thì mình chỉ việc
                     onPress={ this.props.openDetail } là nó chạy :D
               */
            <View style={containner}>
                <View style={wapperImage1}>
                    <Text style={titleText}>KHU VỰC HOMESTAY</Text>
                </View>
                <View style={body}>
                    
                    <TouchableOpacity onPress={this.props.openArea}>
                        <Image source={hinh1} style={homeImage} />
                        <Text style={homeName}>Name</Text>
                        <Text style={homePrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={hinh2} style={homeImage} />
                        <Text style={homeName}>Name</Text>
                        <Text style={homePrice}>250$</Text>
                    </TouchableOpacity>
                    <View style={{ height: 10, width }} />
                    <TouchableOpacity>
                        <Image source={hinh3} style={homeImage} />
                        <Text style={homeName}>Name</Text>
                        <Text style={homePrice}>250$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={hinh4} style={homeImage} />
                        <Text style={homeName}>Name</Text>
                        <Text style={homePrice}>250$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
