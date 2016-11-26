/**
 * Created by Austin on 11/25/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCf0FaXPs-HqJm93mgTW1g4vxE8JurUmUU";

/** Creating a new component, that should produce some sort of HTML */

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));