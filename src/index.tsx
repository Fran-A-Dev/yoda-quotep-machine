
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteApp from './QuoteApp';
import * as serviceWorkers from './serviceWorkers';

const randomQuotes: string[] = [
    
    "Interesting This Is..hmmm",
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