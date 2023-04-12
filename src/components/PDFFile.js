import React from 'react';
import {  Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer';
import coti_en_blanco from "../photos/coti_en_blanco.png";

function formatearNumero(numero) {
  const separadorMiles = ".";
  const partes = numero != null ? numero.toString().split(".") : [];
  if (partes[0]) {
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, separadorMiles);
  }
  if (partes.length > 1) {
    partes.pop();
  }
  return partes.join(".");
}




const styles = StyleSheet.create({
  body: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 8,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: 'bold',
  },
  header: {
    fontSize: 8,
    marginBottom: 8,
    textAlign: "center",
    color: "grey",
  },
});

  const PDFFile = (props) => {
    return (
        <Document>
        <Page style={styles.body}>
          <View>
              {/* <Text>Nombre del usuario: {props.datos.nombre}</Text>
              <Text>Correo electrónicooo: {props.datos.email}</Text> */}
              <View style={{ position: 'relative' }}>
                  <Image
                    src={coti_en_blanco}
                    style={{ width: '100%', height: '100%' }}
                  />
                <Text style={[{ position: 'absolute', top: 20, left: 400 }, styles.text]}>
                  Valor dólar: ${props.datos.dolar}
                </Text>
                <Text style={[{ position: 'absolute', top: 40, left: 400 }, styles.text]}>
                  Fecha: {props.datos.fecha}
                </Text>
                <Text style={[{ position: 'absolute', top: 125, left: 200 }, styles.text]}>
                  {props.datos.razonsocial}
                </Text>
                <Text style={[{ position: 'absolute', top: 151, left: 200 }, styles.text]}>
                  {props.datos.rut}
                </Text>
                <Text style={[{ position: 'absolute', top: 175, left: 200 }, styles.text]}>
                  {props.datos.giro}
                </Text>
                <Text style={[{ position: 'absolute', top: 212, left: 200 }, styles.text]}>
                  {props.datos.direccion}
                </Text>
                <Text style={[{ position: 'absolute', top: 244, left: 200 }, styles.text]}>
                  {props.datos.email}
                </Text>
                <Text style={[{ position: 'absolute', top: 272, left: 200 }, styles.text]}>
                  {props.datos.telefono}
                </Text>

                <Text style={[{ position: 'absolute', top: 388, left: 210 }, styles.text]}>
                  {props.datos.licenciasCantidad}
                </Text>
                <Text style={[{ position: 'absolute', top: 388, left: 330 }, styles.text]}>
                  {formatearNumero(props.datos.licenciasTotal)}
                </Text>
                <Text style={[{ position: 'absolute', top: 424, left: 210 }, styles.text]}>
                  {props.datos.kitCantidad}
                </Text>
                <Text style={[{ position: 'absolute', top: 424, left: 465 }, styles.text]}>
                  {'$'+ formatearNumero(props.datos.kitTotal)}
                </Text>
                <Text style={[{ position: 'absolute', top: 463, left: 210 }, styles.text]}>
                  {formatearNumero(props.datos.adhesivosCantidad)}
                </Text>
                <Text style={[{ position: 'absolute', top: 463, left: 465 }, styles.text]}>
                  {'$'+ formatearNumero(props.datos.adhesivosTotal)}
                </Text>
  
                <Text style={[{ position: 'absolute', top: 492, left: 465 }, styles.text]}>
                  {'$'+formatearNumero(parseInt(props.datos.kitTotal) + parseInt(props.datos.adhesivosTotal)+parseInt(props.datos.licenciasTotal)*parseInt(props.datos.dolar))}
                </Text>
                <Text style={[{ position: 'absolute', top: 386, left: 465 }, styles.text]}>
                  {'$'+formatearNumero(parseInt(props.datos.licenciasTotal)*parseInt(props.datos.dolar))}
                </Text>

                <Text style={[{ position: 'absolute', top: 570, left: 17 }, styles.text]}>
                  {props.datos.responsable}
                </Text>
              </View>
          </View>
        </Page>
        </Document>
    );
  };

export default PDFFile;
