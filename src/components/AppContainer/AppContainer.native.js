// @flow

import React from 'react';

import { View } from 'react-native';

const AppContainer = (props: any ) =>
    <View style={{ display: 'flex' }}>
        {props.children}
    </View>

export default AppContainer;