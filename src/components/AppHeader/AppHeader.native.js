// @flow

import React from 'react';
import { View, Text } from 'react-native';

import Logo from '../Logo';

const AppHeader = ({ currentPageName }: any) =>
    <View style={{backgroundColor: "rgb(0, 188, 212)", padding: 5, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Logo />
        <View style={{flex: 1, alignItems: 'center'}}><Text>{currentPageName}</Text></View>
    </View>

AppHeader.propTypes = {
    currentPageName: React.PropTypes.string
};

export default AppHeader;