import React from 'react';
import ReactDom from 'react-dom/client';

//import routing pages
import App from './App';

//import main styles
import './index.css'

//accessing the root element 
const root =ReactDom.createRoot(document.getElementById('root'));

root.render(<App/>);