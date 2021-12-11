import * as React from 'react';
import './Header.css';

export default function Header(){

    return(
        <div className = "header-container">
            <span className = 'header-item'>
                ID
            </span>
            <span className = 'header-item'>
                Data Types
            </span>
            <span className = 'header-item'>
                Constraints
            </span>
            <span className = 'header-item'>
                Keys
            </span>
        </div>
    );
}