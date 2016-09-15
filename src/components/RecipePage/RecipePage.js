// @flow

import React from 'react';

import CreateIngredient from '../CreateIngredient';
import Ingredients from '../Ingredients';
import RecipeHeader from '../RecipeHeader';

const RecipePage = () => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <RecipeHeader />
            <div>
                <CreateIngredient />
                <Ingredients />
            </div>
        </div>
    );
}

export default RecipePage;