import React, { useState } from "react";
//import "./App.css";
import PDFFile from './components/PDFFile.js';
import Formulario from './components/form.js';
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  const[datosFormulario, setDatosFormulario] = useState({});

  const handleFormSubmit = (datos) => {
    setDatosFormulario(datos)
  }

  return (
    <div className="App">
      <Formulario onFormSubmit={handleFormSubmit} />
      <PDFDownloadLink document={<PDFFile datos = {datosFormulario} />} filename="FORM">
      {({loading}) => (loading ? <button>Cargando Documento...</button> : <button>Descargar</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default App;
