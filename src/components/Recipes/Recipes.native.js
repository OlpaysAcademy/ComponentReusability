// @flow

import React from 'react';
import { View } from 'react-native';

import RecipeItem from '../RecipeItem';

import type { RecipesById, OnSelectedRecipe, OnUnselectedRecipe } from '../../types/state';

type RecipesProps = {
    recipesById: RecipesById,
    onShowRecipe: (id: string) => void,
    onSelectRecipe: OnSelectedRecipe,
    onUnselectRecipe: OnUnselectedRecipe
};

const Recipes = ({ recipesById, onShowRecipe, onSelectRecipe, onUnselectRecipe }: RecipesProps) => {
    return (
        <View>
            {
                recipesById && Object.keys(recipesById).map(
                    recipeId => <RecipeItem
                        key={recipeId}
                        id={recipeId}
                        onShowRecipe={() => onShowRecipe(recipeId) }
                        onSelectRecipe={onSelectRecipe}
                        onUnselectRecipe={onUnselectRecipe}
                        name={recipesById[recipeId].name}
                        isRead={recipesById[recipeId].isRead}
                        isSelected={recipesById[recipeId].isSelected}
                        />
                )
            }
        </View>
    );
}

export default Recipes;