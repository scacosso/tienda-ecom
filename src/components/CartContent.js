import React from 'react';

export default function counter(props){
    return (
        <div>
            <button onClick={props.decrementCount}>Restar</button>
            <span>{props.count}</span>
            <button onClick={props.incrementCount}>Sumar</button>
        </div>
    )
}

