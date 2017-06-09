/**
 * Created by Nine Tailed Fox on 06/06/2017.
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

export default class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const options = [
            'An Giang',
            'Bà Rịa - Vũng Tàu',
            'Bắc Giang',
            'Bắc Kạn',
            'Bạc Liêu',
            'Bắc Ninh',
            'Bến Tre',
            'Bình Định',
            'Bình Dương',
            'Bình Phước',
            'Bình Thuận',
            'Cà Mau',
            'Cao Bằng',
            'Đắk Lắk',
            'Đắk Nông',
            'Điện Biên',
            'Đồng Nai',
            'Đồng Tháp',
            'Gia Lai',
            'Hà Giang',
            'Hà Nam',
            'Hà Tĩnh',
            'Hải Dương',
            'Hậu Giang',
            'Hòa Bình',
            'Hưng Yên',
            'Khánh Hòa',
            'Kiên Giang',
            'Kon Tum',
            'Lai Châu',
            'Lâm Đồng',
            'Lạng Sơn',
            'Lào Cai',
            'Long An',
            'Nam Định',
            'Nghệ An',
            'Ninh Bình',
            'Ninh Thuận',
            'Phú Thọ',
            'Quảng Bình',
            'Quảng Nam',
            'Quảng Ngãi',
            'Quảng Ninh',
            'Quảng Trị',
            'Sóc Trăng',
            'Sơn La',
            'Tây Ninh',
            'Thái Bình',
            'Thái Nguyên',
            'Thanh Hóa',
            'Thừa Thiên Huế',
            'Tiền Giang',
            'Trà Vinh',
            'Tuyên Quang',
            'Vĩnh Long',
            'Vĩnh Phúc',
            'Yên Bái',
            'Phú Yên',
            'Cần Thơ',
            'Đà Nẵng',
            'Hải Phòng',
            'Hà Nội',
            'TP HCM',

        ];

        function setSelectedOption(selectedOption) {
            this.setState({
                selectedOption
            });
        }

        function renderOption(option, selected, onSelect, index) {
            const style = selected ? { fontWeight: 'bold' } : {};

            return (
                <TouchableOpacity onPress={onSelect} key={index}>
                    <Text style={style}>{option}</Text>
                    <Text>--------------------------------------------</Text>
                </TouchableOpacity>
                
            );
        }

        function renderContainer(optionNodes) {
            return <View>{optionNodes}</View>;
        }

        return (
            <View style={{ margin: 20 }}>
                <ScrollView>
                    <View>
                        <TextInput
                            placeholder='Tìm kiếm địa danh'
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <RadioButtons
                        options={options}
                        onSelection={setSelectedOption.bind(this)}
                        selectedOption={this.state.selectedOption}
                        renderOption={renderOption}
                        renderContainer={renderContainer}
                    />
                    <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
                </ScrollView>
            </View>);
    }
}
