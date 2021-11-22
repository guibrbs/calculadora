import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from "./main/Calculator";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h3>Calculadora</h3>
            <Calculator/>
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

