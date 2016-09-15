// @flow

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default App;
