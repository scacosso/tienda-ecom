import React, { Component } from 'react';


class ItemListContainer extends Component {
        render() {
        return (
        	<div>
				<h1>Bienvenido {this.props.nombre} a nuestra tienda, esperamos tu compra!</h1>
			</div>
        );
    }
}

export default ItemListContainer;