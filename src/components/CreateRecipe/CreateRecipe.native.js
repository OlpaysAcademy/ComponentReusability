// @flow

import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';

import Base from './CreateRecipe.base';

type Props = {
    createRecipe: (name: string) => void
}

class CreateRecipe extends Base {
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={this.state.name} onChangeText={name => this.setState({ name }) } />
                <TouchableHighlight onPress={() => this.onSubmit() }><Text>Create</Text></TouchableHighlight>
            </View>
        );
    }
}

export default CreateRecipe;