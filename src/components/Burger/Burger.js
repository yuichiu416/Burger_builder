import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
      .map((key, idx) => {
        return [...Array(props.ingredients[key])].map((k, i) => {
          // Array length is how many of each ingredient we have
          return <BurgerIngredient key={key + idx + i} type={key} />; // actually render the ingredient
        });
      }).reduce((arr, el) => arr.concat(el), []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients</p>;
    }
    return (
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
            {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
};

export default burger;