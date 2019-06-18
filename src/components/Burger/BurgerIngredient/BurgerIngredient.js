import React from 'react';
import './BurgerIngredient.css'
const BurgerIngredient = (props) => {
    let inggredient = null;
    switch(props.type){
        case ('bread-bottom'):
            inggredient = <div className="BreadBottom"></div>
            break;
        case ('bread-top'):
            inggredient = <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            break;
        case ('meat'):
            inggredient = <div className="Meat"></div>
            break;
        case ('cheese'):
            inggredient = <div className="Cheese"></div>
            break;
        case ('salad'):
            inggredient = <div className="Salad"></div>
            break;
        case ('bacon'):
            inggredient = <div className="Bacon"></div>
            break;

        default:
            inggredient = null;
    }

    return inggredient;
}

export default BurgerIngredient;