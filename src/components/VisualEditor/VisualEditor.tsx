import * as React from 'react';
import './VisualEditor.css';

const VisualEditor = ()=>{

    return(
    <div className = "container">
        <div className = "title-block">
            <h2 className = 'title'>
                Movie
            </h2>
        </div>
        <div className = "field">
            <div className = 'input-cont'>
                <input placeholder="field-name" value = 'id' type = 'text' className = "field-name" />
            </div>
            <div className = 'input-cont'>
                <input placeholder = "datatype" value = 'double precision' type = "text" className = "datatype" />
            </div>
            <div className = 'input-cont'>
                <label className='null'>
                    <input className ='checkbox' type = "checkbox"/>
                    NULL
                </label>
            </div>
            <div className = 'input-cont'>
                <label className='null'>
                    <input className ='checkbox' type = "checkbox"/>
                    UNIQUE
                </label>
            </div>
            <div className = 'input-cont'>
                <select className = 'unique'>
                    <option value = "PK">INC</option>
                    <option value = "FK">UUID</option>
                    <option value = "">N/A</option>
                </select>
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

