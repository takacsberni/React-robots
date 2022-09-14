import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import {models1} from "./models";
import TerminatorLister from "./components/temrinator-lister";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TerminatorLister models1={models1}/>
);
