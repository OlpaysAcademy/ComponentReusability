// @flow

import { connect } from 'react-redux'

import RecipePage from './RecipePage'

const mapStateToProps = ({ shownRecipe, recipesById, ingredientsById }) => {
    return {
        shownRecipe,
        recipesById,
        ingredientsById
    }
}

export default connect(
    mapStateToProps,
    null
)(RecipePage);
