import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    render(){
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your name" />
                    <input className="Input" type="email" name="email" placeholder="Your email" />
                    <input className="Input" type="text" name="street" placeholder="Street" />
                    <input className="Input" type="text" name="postal" placeholder="Postal code" />
                    <Button btnType="Success" >ORDER</Button>
                </form>
            </div>
        );
    }

}

export default ContactData;