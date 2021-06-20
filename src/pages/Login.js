import React from 'react';
import Form from "../components/Form";

function login() {
    return (
        <div className="col-5 card m-5 p-5">
            <h3>Iniciar Sesion</h3>
            <div>
                <Form />
            </div>
        </div>
    );
}

export default login;