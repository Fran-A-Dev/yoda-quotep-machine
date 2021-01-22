
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteApp from './QuoteApp';
import * as serviceWorkers from './serviceWorkers';

const randomQuotes: string[] = [
    
    "Fear is the path to the dark side.  Fear leads to Anger... Anger leads to hate. Hate leads to ..suffering",
    "Much Fear I sense in You",
    "Feel the Force",
    "Size Matters Not",
    "The Dark Side Clouds Everything",
    "Powerful You Have Become.  The Dark Side I Sense In You"
]
ReactDOM.render(
    <React.StrictMode>
        <QuoteApp quotes={randomQuotes}/>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorkers.unregister();