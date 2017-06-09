//import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Search from '../Search/Search';
import Inbox from '../Inbox/Inbox';
import Favorite from '../Favorite/Favorite';
import HomeDetail from '../HomeDetail/HomeDetail';
import Checkout from '../HomeDetail/Checkout';
import ListHomestay from '../Home/ListHomestay';
import Calendar from '../Search/Calendar';
import Place from '../Search/Place';

export const HomeStack = StackNavigator({
    HomeStack: {
        screen: Home,
        navigationOptions: {
            title: 'Trang Chủ',
            headerStyle: {
                    backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    MH_HomeDetail: {
        screen: HomeDetail,
        navigationOptions: {
            title: 'Chi tiết Homestay',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    CheckoutStack: {
        screen: Checkout,
        navigationOptions: {
            title: 'Đặt Phòng',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    ListHomestayStack: {
        screen: ListHomestay,
        navigationOptions: {
            title: 'Danh sách Homestay',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
});
export const SearchStack = StackNavigator({
    SearchStack: {
        screen: Search,
        navigationOptions: {
            title: 'Tìm Kiếm',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        },
    },
    HomeDetailStack: {
        screen: HomeDetail,
        navigationOptions: {
            title: 'Chi tiết Homestay',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    CalendarStack: {
        screen: Calendar,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    PlaceStack: {
        screen: Place,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
});
export const FavoriteStack = StackNavigator({
    FavoriteStack: {
        screen: Favorite,
        navigationOptions: {
            title: 'Yêu Thích',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    HomeDetail: {
        screen: HomeDetail,
        navigationOptions: {
            title: 'Chi tiết Homestay',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
    CheckoutStack: {
        screen: Checkout,
        navigationOptions: {
            title: 'Đặt Phòng',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    }
});
export const InboxStack = StackNavigator({
    InboxStack: {
        screen: Inbox,
        navigationOptions: {
            title: 'Tin Nhắn',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
});
export const ProfileStack = StackNavigator({
    ProfileStack: {
        screen: Profile,
        navigationOptions: {
            title: 'Thông Tin',
            headerStyle: {
                backgroundColor: '#60BF4C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    },
});

