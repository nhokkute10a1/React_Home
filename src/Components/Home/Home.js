import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import  Collection from './Collection';
import ListOfCategory from './ListOfCategory';
import Area from './Area';
import Homestay from './ListHomestay';

import  styles from  '../../Style/style';

export default class Home extends Component {
    // viết 1 hàm gọi đến thằng detail
    openHomeDetail() {
        const { navigate } = this.props.navigation;
        navigate('MH_HomeDetail')
    }
    gotoArea(){
        const { navigate } = this.props.navigation;
        navigate('ListHomestayStack')
    }
    render() {
        const { BackGround } = styles;
        return (
            <ScrollView style={BackGround}>
                <Collection/>
                <ListOfCategory/>
                {/*truyền nó qua thằng nào mà mình từ nó đến detail
                    cụ thể ở đây là topHome
                    tên props là openDetail
                    function truyền qua là openHomeDetail
                */}
                <Area openArea={this.gotoArea.bind(this)} />
                {/*<Homestay/>*/}
            </ScrollView>
        );
    }
}
