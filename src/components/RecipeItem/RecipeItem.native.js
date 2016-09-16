// @flow

import React from 'react';
import { View, Text } from 'react-native';

import type { OnSelectedRecipe, OnUnselectedRecipe } from '../../types/state';

type RecipeItemProps = {
    name: string,
    id: string,
    isRead: boolean,
    isSelected: boolean,
    onShowRecipe: () => void,
    onSelectRecipe: OnSelectedRecipe,
    onUnselectRecipe: OnUnselectedRecipe
};

const RecipeItem = ({ name, id, isRead, isSelected, onShowRecipe, onSelectRecipe, onUnselectRecipe }: RecipeItemProps) => {
    const style = { backgroundColor: !isRead ? 'rgba(0,0,0,0.2)' : null };
    return (
        <View><Text style={style}>{name}</Text></View>
    );
}

export default RecipeItem;