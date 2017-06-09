import React, { Component } from 'react';

import { SideMenu } from './Router/TabNavigation';
// import Authentication from './Authentication/Authentication';
// import { TabsInfo } from './Router/TabInfor';
// import HomeDetail from './HomeDetail/HomeDetail';
// import Checkout from './HomeDetail/Checkout';
import Search from './Search/Search';
import Place from './Search/Place';


export default class App extends Component {
    render() {
        return (
           <SideMenu />
           //<Place />
        );
    }
}
