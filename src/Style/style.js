import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const productWidth = (width - 50) / 2;
const productHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    viewTabs: {
        height: height / 12,
    },
    iconTab: {
        width: 25,
        height: 25,
        margin: 5

    },
    textTab: {
        fontSize: 9
    },
    image: {
        width: width * 0.9,
        height: height / 5,
        position: 'relative'
    },
    text: {
        color: '#23AF4C',
        position: 'absolute',
        zIndex: 2,
        bottom: 30,
        left: 0,
        marginLeft: 100,
    },
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f7f7f7',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    titleStyle: {
        fontSize: 26,
        marginLeft: 20,
        color: '#C0392B',
        marginBottom: 5,
        marginTop: 20,
    },
    wapper: {
        backgroundColor: 'white',
        height: height * 0.1,
        margin: 10,
        //mau do bong
        shadowColor: '#4f5051',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2, //do mo
    },
    wapper1: {
        backgroundColor: 'white',
        height: height * 0.3,
        margin: 10,
        //mau do bong
        shadowColor: '#4f5051',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2, //do mo
    },
    avatar: {
        position: 'absolute',
        zIndex: 2,
        bottom: 7,
        marginLeft: width*0.02,
        height: 50,
        width: 50,
        borderRadius: 22
    },
    viewInf: {
        position: 'absolute',
        zIndex: 2,
        left: 0,
        marginLeft: 70,
        marginTop: 15,
    },
    iconLeftPro: {
        left: 300,
        width: 30,
        height: 30,
        marginTop: 18,
    },
    iconLeft: {
        left: 260,
        width: 30,
        height: 30,
    },
    iconIma: {
        width: 30,
        height: 30,
        left: 7,
    },
    textPro: {

        color: 'black',
        position: 'absolute',
        zIndex: 2,
        left: 0,
        marginLeft: 60,
        marginTop: 15
    },
    viewPro: {
        padding: 10,
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row'
    },
    textMenu: {
        margin: 10
    },
    titleSea: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 5,
        // marginTop: 20,
        flexDirection: 'row',
        height: height / 12,
    },
    textTile: {
        fontSize: 20,
        color: '#C0392B',
        marginLeft: 150,
        paddingTop: 10
    },
    iconSea: {
        width: 30,
        height: 30,
        left: 120,
        marginTop: 10
    },
    btnStyle: {
        height: 50,
        paddingHorizontal: 130,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnsigninText: {
        color: '#34B089',
        fontSize: 20,
    },
    btnSignInStyle: {
        height: 50,
        paddingHorizontal: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    textStyle: {
        margin: 10
    },
    //style moi
    BackGround: {
        flex: 1,
        backgroundColor: '#E9E9EF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wapperImage: {
        height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        flexDirection:'column',
        //mo
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    containnerImage: {
        height: height * 0.37,
        backgroundColor: '#FFF',
        margin: 10,
        //mo
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: 20,
        color: '#AFAFAF',
        justifyContent: 'center',
        marginTop: 5
    },
    wapperImage1: {
        flex: 1,
        justifyContent: 'center'
    },
    wapperImage2: {
        flex: 4,
        justifyContent: 'flex-end'
    },
    cateTitle: {
        fontSize: 20,
        color: '#9A9A9A'
    },
    containner: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    homeImage: {
        width: productWidth,
        height: productHeight,
    },
    homeName: {
        paddingLeft: 10,
        color: '#B0B0B0',
        fontWeight: '500'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //dan gia tri hinh ra
        flexWrap: 'wrap',
        marginTop: 20
    },
    homePrice: {
        paddingLeft: 10,
        color: '#D1507F'
    },
    //authentication
    authentication: {
        flex: 1,
        backgroundColor: '#60BF4C',
        padding: 20,
        justifyContent: 'space-between',

    },
    iconStyleAuthe: {
        width: 30,
        height: 30
    },
    rowAuthen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyleAuthe: {
        color: '#FFF',
        fontSize: 25
    },
    controlStyle: {
        flexDirection: 'row',
        // rong full man hinh
        alignSelf: 'stretch'
    },
    signInStyle: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signOutStyle: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#60BF4C'
    },
    inputStyle: {
        backgroundColor: '#FFF',
        height: 50,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 30
    },
    btnsignIn: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //list product
    containerList: {
        flex: 1,
        backgroundColor: '#E7E7E7'
    },
    wapperList: {
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 5,
    },
    header: {
        height: height / 13,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    iconBack: {
        width: 30,
        height: 30
    },
    titleStyleList: {
        color: '#C84182',
        fontSize: 20
    },
    containerPro: {
        flexDirection: 'row',
        padding: 10,
        borderTopColor: '#E7E7E7',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
        paddingVertical: 15
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagePro: {
        width: 90,
        height: (90 * 452) / 361
    },
    txtName: {
        color: '#ECECEC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtShowDetail: {
        color: '#D09DB7',
        fontSize: 12
    },
    colorView: {
        backgroundColor: 'cyan',
        height: 10,
        width: 10,
        borderRadius: 5
    },
    mapContainer: {
        margin: 10,
        borderRadius: 2,
    },
    mapStyle: {
        width: imageWidth,
        height: imageHeight
    },
    containerDetail: {
        //height: height * 0.35,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 5,
        flex: 1
    },
    bannerImage: {
        height: height / 4,
        marginTop: 10,
        //margin: 10,
        //mo
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-between'
    },
    viewTab: {
        margin: 10,
        width: width * 0.9,
        height: height / 3
    },
    checkoutButton: {
        height: 35,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#60BF4C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    productController: {
        flexDirection: 'row',
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 60,
        marginTop: 5
    },
    numberOfProductLeft: {
        borderWidth: 1,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    numberOfProductCenter: {
        borderWidth: 1,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberOfProductRight: {
        borderWidth: 1,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    imageCheck: {
        width: width * 0.8,
        margin: 10,
        height: height / 4
    },
    txtTile: {
        fontSize: 22,
        color: '#60BF4C'
    },
    txtTile1: {
        fontSize: 19,
        color: '#60BF4C'
    },
    wapperCheck: {
        margin: 10
    },
    inputDate: {
        borderWidth: 1,
        borderColor: 'red',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    txtButton: {
        color: '#60BF4C',
        fontSize: 15
    },
    infoCheck: {
        flexDirection: 'row'
    },
    txtPrice: {
        marginLeft: 10,
        color: '#C83D80'
    },
    searchContainner: {
        backgroundColor: '#60BF4C',
        margin: 10,
    },
    wapperSearch: {
        borderWidth: 2,
        borderColor: '#FFF',
        height: 35,
        paddingTop: 5,
        paddingLeft: 15
    },
    searchBody: {
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10
    },
    bodyInfo: {
        flexDirection: 'row',
        //justifyContent: 'space-around'
    },
    txtInfo: {
        marginLeft: width*0.18,
        marginTop: 5,
    },
    bodyCheck: {
        marginTop: 20,
        marginLeft: 20
    },
    txtCheck: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    bodySearchView: {
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    btnLeft: {
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        marginBottom: 5
    },
    btnRight: {
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 5
    },
    imgPrice: {
        color: '#FFF',
        backgroundColor: 'dimgray',
        width: 100,
        fontSize: 15,
        paddingLeft: 5,
       // marginTop:100,
        marginTop: productHeight - 240,
        marginRight: productWidth * 1.4
    },
    imgIcon: {
        backgroundColor: '#FFF',
        width: 35,
        paddingLeft: 5,
        borderRadius: 5,
        marginLeft: productWidth * 1.4,
        marginTop: productHeight -60,
    },
    titleTop: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
    },
    iconMore: {
        width:15,
        height: 15,
        marginTop: 4
    }
});
export default styles;
