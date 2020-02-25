import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = props => {
    return (
        <div className="CheckoutSummary">
            <h1>We  hope it tasts well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btyType="Danger"
                clicked={props.checkoutCancelled}>Cancel</Button>
            <Button 
                btyType="Success"
                clicked={props.checkoutContinued}
            >Continue</Button>
        </div>
    );
}

export default checkoutSummary;