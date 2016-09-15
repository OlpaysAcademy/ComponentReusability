// @flow

import React from 'react';

import CreateRecipe from '../CreateRecipe';
import ReadRecipes from '../ReadRecipes';
import Recipes from '../Recipes';

const RecipesPage = () =>
    <div style={{ flex: 1 }}>
        <CreateRecipe />
        <ReadRecipes />
        <Recipes />
    </div>

export default RecipesPage;