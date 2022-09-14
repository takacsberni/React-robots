import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import Terminator from "./components/Terminator";
import {models1} from "./models";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Terminator models1={models1}/>
);
