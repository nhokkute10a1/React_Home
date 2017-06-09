/**
 * Created by Nine Tailed Fox on 09/06/2017.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

// Ở đây này, trong cái lib react-native-calendar nó chỉ có export 1 cái
// duy nhât là Calendar thôi
import Calendar from 'react-native-calendar';
import moment from 'moment';
import styles from './../../Style/style.js';

export default class CalendarPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment().format(),
        };
    }
    render() {
        const { icon } = styles;
        return (
            <View style={styles.container}>
                <Calendar
                    customStyle={{ day: { fontSize: 15, textAlign: 'center' } }}
                    ref="calendar"
                    eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
                    events={
                        [{ date: '2016-07-04', hasEventCircle: { backgroundColor: 'powderblue' } }]
                    }
                    scrollEnabled
                    showControls
                    dayHeadings={customDayHeadings}
                    monthNames={customMonthNames}
                    titleFormat={'MMMM YYYY'}
                    prevButtonText={'Prev'}
                    nextButtonText={'Next'}
                    onDateSelect={(date) => this.setState({ selectedDate: date })}
                    onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
                    onTouchNext={(e) => console.log('onTouchNext: ', e)}
                    onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
                    onSwipeNext={(e) => console.log('onSwipeNext', e)}
                />
                <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
            </View>
        );
    }
}
const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

