import { Component } from 'react';

type Props = {
    createRecipe: (name: string) => void
}

class Formulae extends Component {

    constructor() {
        const initial = 'New Recipe';
        super();
        this.state = {
            initial,
            name: ''
        }
    }

    onSubmit() {
        const { createRecipe }: Props = this.props;
        if (!this.state.name.trim()) {
            return;
        }
        createRecipe(this.state.name);
        this.setState({
            name: ''
        });
    }
}

module.exports = Formulae;