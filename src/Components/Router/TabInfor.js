import { TabNavigator } from 'react-navigation';
import Assess from '../Assess/Assess';
import Convenient from '../Convenient/Convenient';
import Introduce from '../Introduce/Introduce';

export const TabsInfo = TabNavigator({
    Convenient: {
        screen: Convenient,
        navigationOptions: {
            tabBarLabel: 'Tiện nghi'
        }
    },
    Introduce: {
        screen: Introduce,
        navigationOptions: {
            tabBarLabel: 'Giới thiệu'
        }
    },
    Assess: {
        screen: Assess,
        navigationOptions: {
            tabBarLabel: 'Đánh giá'
        }
    }
}, {
    tabBarOptions: {
        style: {
            backgroundColor: '#FFF'
        },
        inactiveTintColor: 'black',
        activeTintColor: '#60BF4C',
    }
});
