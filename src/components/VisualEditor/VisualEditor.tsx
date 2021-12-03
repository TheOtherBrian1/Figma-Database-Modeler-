import * as React from 'react';
import {useState} from 'react';
import './VisualEditor.css';
import InputBox from './InputBox';
import Constraints from '../Constraints/Constraints';

const VisualEditor = ()=>{
    const [input, setInput] = useState(['', '']);
    return(
    <div className = "container">s
        <div className = "title-block">
            <h2 className = 'title'>
                Movie
            </h2>
        </div>
        <div className = "field">
            <div className = 'input-cont'>
                <InputBox data = {['duck']} />
            </div>
            <div className = 'input-cont'>
                {/*<input placeholder = "datatype" value = 'double precision' type = "text" className = "datatype" />*/}
                <InputBox data = {['duck']} />
            </div>
            <div className = 'input-cont'>
                <Constraints />
            </div>
            <div className = 'input-cont last'>
                <select className = 'keys'>
                    <option value = "PK">PK</option>
                    <option value = "FK">FK</option>
                    <option value = "">N/A</option>
                </select>
            </div>
        </div>    
    </div>
    )
}

export default VisualEditor;
