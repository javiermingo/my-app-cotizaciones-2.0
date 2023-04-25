import React, { useState } from 'react';
import './form.css';
import chileanRut from 'chilean-rut';

// function todo_rut(rut) {
//   if(chileanRut.validate(rut)) {
//     let verificador = rut % 10;
//   }
// }

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

  const handleChangeRut = (e) => {
    const newRutLimpio = chileanRut.unformat(e.target.value);
    // Validar si el valor actual del campo de entrada de texto es un número de RUT válido
    const isValidRut = chileanRut.validate(newRutLimpio);
    if (isValidRut) {
      const digito_verificador = newRutLimpio.charAt(newRutLimpio.length - 1)
      const sin_digito_verificador = newRutLimpio.slice(0, newRutLimpio.length - 1)
      const rut_formateado_sin_veri = chileanRut.format(sin_digito_verificador);
      setRut(rut_formateado_sin_veri+'-'+digito_verificador);
    } else {
      // Si el valor no es un RUT válido, mostrar el valor actual sin formato
      setRut(newRutLimpio);
    }
  };
  
  
  function separarNumeroTelefono(numero) {
    // Eliminar espacios en blanco y otros caracteres no numéricos
    const numeros = numero.replace(/\D/g, '');
  
    // Dividir en grupos de cuatro dígitos de derecha a izquierda
    const grupos = [];
    let grupo = '';
    for (let i = numeros.length - 1; i >= 0; i--) {
      grupo = numeros[i] + grupo;
      if ((numeros.length - i) % 4 === 0) {
        grupos.unshift(grupo);
        grupo = '';
      }
    }
    // Agregar el último grupo, si es necesario
    if (grupo.length > 0) {
      grupos.unshift(grupo);
    }
    
    // Devolver los grupos de números como una cadena separada por guiones
    return grupos.join(' ');
  }
  
  
  

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
            <input type="text" value={rut} onChange={handleChangeRut} />
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
            <input type="text" value={telefono} onChange={(e) => setTelefono(separarNumeroTelefono(e.target.value))} />
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
            <label>Precio unitario kits-tarjetas:</label>
            <input type="number" defaultValue={0} value={kitTotal} onChange={(e) => setKitTotal(e.target.value)} />
          </div>
        </div>
        <div className="grupo">
          <div className="input-cuadrado">
            <label>Cantidad de adhesivos:</label>
            <input type="number" defaultValue={0} value={adhesivosCantidad} onChange={(e) => setAdhesivosCantidad(e.target.value)} />
          </div>
          <div className="input-cuadrado">
            <label>Precio unitario adhesivos:</label>
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
