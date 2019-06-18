import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Meat', type: 'meat'},
    {label:'Cheese', type: 'cheese'}
]

const BuildContrrols = (props) => (
    <div className="BuildControls"> 
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
         ))}

    </div>
)

export default BuildContrrols;