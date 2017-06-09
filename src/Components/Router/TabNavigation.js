import React from 'react';
import { Image, Dimensions } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import { HomeStack, SearchStack, FavoriteStack, InboxStack, ProfileStack } from './Navigation';

import Menu from '../Menu/Menu';

import iHome from '../../Media/Home.png';
import iSearch from '../../Media/Search.png';
import iFavorite from '../../Media/Hearts.png';
import iInbox from '../../Media/Inbox.png';
import iContact from '../../Media/Contacts.png';

const { width } = Dimensions.get('window');

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: () => (
                <Image
                    source={iHome}
                />)
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Tìm kiếm',
            tabBarIcon: () => (
                <Image
                    source={iSearch}
                />)
        },
    },
    Favorite: {
        screen: FavoriteStack,
        navigationOptions: {
            tabBarLabel: 'Yêu thích',
            tabBarIcon: () => (
                <Image
                    source={iFavorite}
                />)
        },
    },
    Inbox: {
        screen: InboxStack,
        navigationOptions: {
            tabBarLabel: 'Tin nhắn',
            tabBarIcon: () => (
                <Image
                    source={iInbox}
                />)
        },
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Thông Tin',
            tabBarIcon: () => (
                <Image
                    source={iContact}
                />)
        }
    }
}, {
    // tab
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        style: {
            backgroundColor: '#60BF4C'
        },
        inactiveTintColor: 'black',
        activeTintColor: '#fff',
        labelStyle: {
            fontSize: 7,
        },
    }
});
export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    },
}, {
    drawerWidth: width * 0.7,
    drawerPosition: 'right',
    contentComponent: props => <Menu {...props} />
});
