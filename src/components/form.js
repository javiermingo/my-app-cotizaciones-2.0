import React, { useState } from 'react';
import './form.css';

function Formulario(props) {
  const [razonsocial, setRazonsocial] = useState('');
  const [rut, setRut] = useState('');
  const [giro, setGiro] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [responsable, setResponsable] = useState('');
  const [dolar, setDolar] = useState('');
  const [fecha, setFecha] = useState('');

  const [licenciasCantidad, setLicenciasCantidad] = useState('');
  const [licenciasTotal, setLicenciasTotal] = useState('');
  const [kitCantidad, setKitCantidad] = useState('');
  const [kitTotal, setKitTotal] = useState('');
  const [adhesivosCantidad, setAdhesivosCantidad] = useState('');
  const [adhesivosTotal, setAdhesivosTotal] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit({
      razonsocial,
      rut,
      giro,
      direccion,
      email,
      telefono,
      responsable,
      dolar,
      fecha,
      licenciasCantidad,
      licenciasTotal,
      kitCantidad,
      kitTotal,
      adhesivosCantidad,
      adhesivosTotal,
    });
  };

return (
  <div className="contenedor-formularios" >
    <h1 className="titulo">Cotizaciones Agrak Harvest</h1>
    <form onSubmit={handleSubmit}>
    <h2 className="titulo">Datos de la Empresa</h2> 
    <div className="formulario"> 
        <div className="grupo">
          <div className="input-cuadrado">
            <label>Razón social:</label>
            <input type="text" value={razonsocial} onChange={(e) => setRazonsocial(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>R.U.T.:</label>
            <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Giro:</label>
            <input type="text" value={giro} onChange={(e) => setGiro(e.target.value)} />
          </div>
        </div>
        <div className="grupo">
          <div className="input-cuadrado">
            <label>Dirección facturación:</label>
            <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Email cliente:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Teléfono:</label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
        </div>
        <div className="grupo">
          <div className="input-cuadrado">
            <label>Responsable Agrak:</label>
            <input type="text" value={responsable} onChange={(e) => setResponsable(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Valor del dólar:</label>
            <input type="number" value={dolar} onChange={(e) => setDolar(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Fecha:</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>
        </div>
    </div>

    <h2 className="titulo">Datos de la compra</h2> 
    <div className="formulario"> 
      <div className="grupo">
          <div className="input-cuadrado">
            <label>Cantidad de licencias:</label>
            <input type="number" defaultValue={0} value={licenciasCantidad} onChange={(e) => setLicenciasCantidad(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Total USD licencias:</label>
            <input type="number" defaultValue={0} value={licenciasTotal} onChange={(e) => setLicenciasTotal(e.target.value)} />
          </div>
        </div>
        <div className="grupo">
          <div className="input-cuadrado">
            <label>Cantidad de Kit-tarjetas:</label>
            <input type="number" defaultValue={0} value={kitCantidad} onChange={(e) => setKitCantidad(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Total CLP kits-tarjetas:</label>
            <input type="number" defaultValue={0} value={kitTotal} onChange={(e) => setKitTotal(e.target.value)} />
          </div>
        </div>
        <div className="grupo">
          <div className="input-cuadrado">
            <label>Cantidad de adhesivos:</label>
            <input type="number" defaultValue={0} value={adhesivosCantidad} onChange={(e) => setAdhesivosCantidad(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Total CLP adhesivos:</label>
            <input type="number" defaultValue={0} value={adhesivosTotal} onChange={(e) => setAdhesivosTotal(e.target.value)} />
          </div>
        </div>
    </div>

    <div className="boton">
      <button type="submit">Enviar</button>
    </div>
    </form>
  </div>
);
}

export default Formulario;
