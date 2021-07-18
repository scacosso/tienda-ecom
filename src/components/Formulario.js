import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const Formulario = ({ createOrder }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    emailConfirmation: "",
  });

  const getContactData = (e) => {
    const { name, value } = e.target;
    setForm((state) => {
      return { ...state, [name]: value };
    });
  };

  const finalizePurchase = () => {
    const { name, email, phone } = form;
    createOrder({ name, email, phone });
  };
  const disabled = !(
    form.email.length &&
    form.name.length &&
    form.emailConfirmation.length &&
    form.phone.length > 0 &&
    form.email === form.emailConfirmation
  );
  return (
    <div className="card m-5 p-5">
      <h2>Datos de Contacto</h2>
      <form>
        <div className="m-2">
          <label className="m-2">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            placeholder="Nombre y Apellido"
            name="name"
            value={form.name}
            onChange={getContactData}
            type="text"
          />
        </div>
        <div className="m-2">
          <label className="m-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={getContactData}
            type="email"
          />
        </div>
        <div className="m-2">
          <label className="m-2">
            <FontAwesomeIcon icon={faPhone} />
          </label>
          <input
            placeholder="Teléfono"
            name="phone"
            value={form.phone}
            onChange={getContactData}
            type="text"
          />
        </div>
        <div className="m-2">
          <label className="m-2">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </label>
          <input
            placeholder="Confirma Email"
            name="emailConfirmation"
            value={form.emailConfirmation}
            onChange={getContactData}
            type="email"
          />
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-success m-3"
        disabled={disabled}
        onClick={finalizePurchase}
      >
        Finalizar
      </button>
    </div>
  );
};
export default Formulario;
