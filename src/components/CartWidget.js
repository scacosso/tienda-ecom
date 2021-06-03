import React from 'react'
import cart from '../images/cart.svg';

export default function CartWidget() {
    return (
        <div>
            <img src={cart} className="w-100 h-auto p-2" alt="logo"/>
        </div>
    )
}
