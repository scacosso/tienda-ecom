import React from 'react';
import ItemCategoryContainer from '../components/ItemCategoryContainer';

export default function category(props) {
    return (
        <>
            <ItemCategoryContainer key={props.key}/>
        </>
    );
}
