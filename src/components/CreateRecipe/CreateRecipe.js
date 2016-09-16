// @flow

import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Base from './CreateRecipe.base';

type Props = {
    createRecipe: (name: string) => void
}

class CreateRecipe extends Base {
    render() {
        return (
            <form
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
                onSubmit={e => { e.preventDefault(); this.onSubmit(); } }
                >
                <TextField
                    hintText={this.state.initial}
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value }) }
                    />
                <RaisedButton type="submit" label="Create" secondary={true} />
            </form>
        );
    }
}

export default CreateRecipe;