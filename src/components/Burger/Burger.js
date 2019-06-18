import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) =>{
    let ingredientList = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr, el)=> {
        return arr.concat(el)
    }, []);

    if (ingredientList.length === 0) {
        ingredientList = "Please start adding Ingredients"
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
                {ingredientList}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )

}

export default Burger;