// @flow

import React from 'react';
import { View } from 'react-native';

import CreateRecipe from '../CreateRecipe';
// import ReadRecipes from '../ReadRecipes';
import Recipes from '../Recipes';

const RecipesPage = () =>
    <View style={{ flex: 1 }}>
        <CreateRecipe />
        <Recipes />
    </View>

        // <ReadRecipes />

export default RecipesPage;