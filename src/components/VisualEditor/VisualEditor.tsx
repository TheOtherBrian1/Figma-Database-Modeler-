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

/*
const checkboxes = document.getElementsByClassName('checkbox');

for(const checked of checkboxes)
    checked.addEventListener('change', ({target})=>{
        if(target.checked)
            target.parentNode.style.color = 'white';
        else
            target.parentNode.style.color = 'rgba(255,255,255,.6)';
        console.log(target, target.checked)
    });
const fieldNames = document.getElementsByClassName('field-name');
const datatypes = document.getElementsByClassName('datatype');
console.log(datatypes[0].style.top, 'milk')
    for(let i = 0; i < fieldNames.length; i++){
        for(let el of [fieldNames, datatypes]){
            const {top, left, right, bottom} = el[i].getBoundingClientRect();
            const style = el[i].style;
            const placeholderDiv = document.createElement('div');
            const elipses = document.createElement('code');
            elipses.innerText = '...';
            placeholderDiv.className = 'replacement';
            el[i].addEventListener('focus', e=>{
                el[i].insertAdjacentElement('afterend', placeholderDiv)
                style.position = 'absolute'; style.zIndex = 3; style.bottom = 0; style.top = -8; style.right = 0; style.left = 0; width = 'auto';
            })
            el[i].addEventListener('blur', e=>{
                placeholderDiv.remove();
                style.position = 'static'; style.top = top; style.bottom = bottom; style.left = left; style.right = right;
            })
        }
    }
    */