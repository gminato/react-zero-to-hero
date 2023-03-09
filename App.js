import React from 'react';
import ReactDOM from'react-dom/client';

let h1 = React.createElement('h1', { id: 'title',key:'k'} ,'Heading 1')
let h2 = React.createElement('h2', {id:'title',key:'k2'} , 'Heading 2')
const root = ReactDOM.createRoot(document.getElementById('root'));
// element, props, children are argument of createElement 
const heading = React.createElement('h1', { id: 'title' }, [h1,h2])
root.render(heading)