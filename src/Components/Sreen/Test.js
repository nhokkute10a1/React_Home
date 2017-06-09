import React, {Component} from 'react';
import {
    View, Text, Image, StyleSheet, Dimensions,
    TouchableOpacity, ScrollView
} from 'react-native';
import {Button, Icon} from 'native-base';

import sp1 from '../../Media/temp/anh1.jpg';
// import sp2 from '../../Media/home/temp/sp2.jpeg';
// import sp3 from '../../Media/home/temp/sp3.jpeg';
// import sp4 from '../../Media/home/temp/sp4.jpeg';

export default class Test extends Component {
    openHomeDetail() {
        const { navigate } = this.props.navigation;
        navigate('MH_HomeDetail')
    }
    render() {
        const {
            container, titleTop, title, body, product,
            productImg, productTxt, imgPrice, touchStyle
        } = styles;
        return (
            <View style={container}>
                <View style={titleTop}>
                    <Text style={title}>HomeStay</Text>
                </View>
                <ScrollView style={body}>
                    <View style={product}>
                        <TouchableOpacity onPress={this.openHomeDetail.bind(this)}>
                            <Image source={sp1} style={productImg}>
                                <Text style={imgPrice}>1.000.000đ</Text>
                            </Image>
                            <Text style={productTxt}>Home Stay Name</Text>
                            <Button iconLeft transparent warning>
                                <Icon name='star'/>
                                <Text>90</Text>
                            </Button>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={touchStyle}>
                                    <Icon name="star"/>
                                </TouchableOpacity>
                                <TouchableOpacity style={touchStyle}>
                                    <Icon name="star"/>
                                </TouchableOpacity>
                                <TouchableOpacity style={touchStyle}>
                                    <Icon name="star"/>
                                </TouchableOpacity>
                                <TouchableOpacity style={touchStyle}>
                                    <Icon name="star"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={product}>
                        <Image source={sp1} style={productImg}>
                            <Text style={imgPrice}>1.000.000đ</Text>
                        </Image>
                        <Text style={productTxt}>Home Stay Name</Text>
                        <Button iconLeft transparent warning>
                            <Icon name='star'/>
                            <Text>90</Text>
                        </Button>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={product}>
                        <Image source={sp1} style={productImg}>
                            <Text style={imgPrice}>1.000.000đ</Text>
                        </Image>
                        <Text style={productTxt}>Home Stay Name</Text>
                        <Button iconLeft transparent warning>
                            <Icon name='star'/>
                            <Text>90</Text>
                        </Button>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={touchStyle}>
                                <Icon name="star"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const {width} = Dimensions.get('window');
const productWidth = width - 50;
const productHeight = ((productWidth / 1920) * 1278 ) - 70;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        marginBottom: 10,
    },
    titleTop: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    title: {
        color: '#D3D3CF',
        fontSize: 20,
    },
    body: {
        marginBottom: 30,
    },
    product: {
        width: productWidth,
        margin: 10,
    },
    productImg: {
        width: width - 40,
        height: productHeight,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5
    },
    productTxt: {
        justifyContent: 'space-around'
    },
    imgPrice: {
        backgroundColor: 'dimgray',
        color: '#fff',
        width: 100,
        fontSize: 15,
        paddingLeft: 5,
        marginTop: productHeight - 20,
    },
    touchStyle: {
        paddingLeft: 5,
        justifyContent: 'center'
    }
})
