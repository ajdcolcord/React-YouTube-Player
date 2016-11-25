/**
 * Created by Austin on 11/25/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/** Creating a new component, that should produce some sort of HTML */

const App = () => {
    return <div>Hi!</div>;
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));