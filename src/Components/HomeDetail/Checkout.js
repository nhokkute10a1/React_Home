/**
 * Created by Nine Tailed Fox on 04/06/2017.
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

import sp1 from '../../Media/temp/hinh1.jpg';
import styles from '../../Style/style';

// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() +
// txt.substr(1).toLowerCase());
// }

export default class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        });
    }

    render() {
        const {
            BackGround, containerDetail, checkoutButton, checkoutTitle, txtTile,
            txtTile1, inputDate, wapperCheck, infoCheck, numberOfProductLeft, numberOfProductCenter,
            numberOfProductRight,
            txtButton, numberOfProduct, imageCheck, txtPrice
        } = styles;
        return (
            <View style={BackGround}>
                <ScrollView style={containerDetail}>
                    <View style={wapperCheck}>
                        <Text style={txtTile}>Thông tin đặt phòng</Text>
                        <Image source={sp1} style={imageCheck} />
                    </View>
                    <View style={wapperCheck}>
                        <Text style={txtTile1}>Ngày đặt:</Text>
                        <View style={inputDate}>
                            <Text style={txtButton}>10 tháng 4,2017 - 11 tháng 4,2017</Text>
                        </View>
                    </View>
                    <View style={wapperCheck}>
                        <Text style={txtTile1}>Số người:</Text>
                        <View style={numberOfProduct}>
                            <View style={numberOfProductLeft}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={numberOfProductCenter}>
                                <Text>{3}</Text>
                            </View>
                            <View style={numberOfProductRight}>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={wapperCheck}>
                        <Text style={txtTile1}>Chọn Phòng:</Text>
                        <RadioGroup
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton value={'item1'}>
                                <Text>Phòng 1</Text>
                                <Text>200$</Text>
                            </RadioButton>

                            <RadioButton value={'item2'}>
                                <Text>Phòng 2</Text>
                                <Text>300$</Text>
                            </RadioButton>

                            <RadioButton value={'item3'}>
                                <Text>Phòng 3</Text>
                                <Text>400$</Text>
                            </RadioButton>
                        </RadioGroup>

                        <Text style={styles.text}>{this.state.text}</Text>
                    </View>
                    <View style={wapperCheck}>
                        <Text style={txtTile1}>Tổng tiền đặt phòng</Text>
                        <View>
                            <View style={infoCheck}>
                                <Text>Trả trước: </Text>
                                <Text style={txtPrice}>200$</Text>
                            </View>
                            <View style={infoCheck}>
                                <Text>Trả sau: </Text>
                                <Text style={txtPrice}>300$</Text>
                            </View>
                            <View style={infoCheck}>
                                <Text>Tổng tiền:</Text>
                                <Text style={txtPrice}>500$</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={checkoutButton}
                >
                    <Text style={checkoutTitle}> Xác Nhận Đặt Phòng </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
