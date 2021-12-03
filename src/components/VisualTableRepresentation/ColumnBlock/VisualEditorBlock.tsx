import * as React from 'react';
import './VisualEditor.css';
import InputBox from './InputBox';
import Constraints from '../Constraints/Constraints';
import KeyButtons from '../KeyButtons/KeyButtons';





export default function VisualEditorBlock(){

    return(
        <div className = "field">
            <div className = 'input-cont'>
                <InputBox data = {['duck']} />
            </div>
            <div className = 'input-cont'>
                <InputBox data = {['duck']} />
            </div>
            <div className = 'input-cont'>
                <Constraints />
            </div>
            <div className = 'input-cont last'>
                <KeyButtons />
            </div>
        </div>
    )
}