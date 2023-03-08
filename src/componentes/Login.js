import React from 'react';
import '../Estilos/Login.css';

export function ProgramarCirugia() {
  return (
    <section>
      <div className="forma-caja">
        <div className="forma-valores">
          <form action="">
            <h2>Programar Cirugía</h2>
            <div className="cajainput">
              <ion-icon name="person-circle-outline"></ion-icon>
              <input type="Usuario" required />
              <label htmlFor="">Usuario</label>
            </div>
            <div className="cajainput">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="Clave" required />
              <label htmlFor="">Clave</label>
            </div>
            <div className="Olvido">
              <label htmlFor=""><input type="checkbox" />Recordarme <a href="#">Olvidé mi Clave</a></label>
            </div>
            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="titulo">
        <img src={require('../Imagenes/clinicaces.png')} alt="logo Clinica" className="Imagen" />
        <h1>Portal web para programación de Cirugía</h1>
        <h1>Clínica CES</h1>
      </div>
    </header>
  );
}


