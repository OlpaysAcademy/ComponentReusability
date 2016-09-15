// @flow

import React from 'react';
import { View } from 'react-native';

const Sidenav = ({ children }: any) => {
    return (
        <View style={{flex: 1}}>
            {children}
        </View>
    );
}

export default Sidenav;