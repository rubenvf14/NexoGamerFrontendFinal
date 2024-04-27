import React from "react";
import logo from "../nexoGamerFinal.png";
import "./Cabecera.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CabeceraJuegos from "./CabeceraJuegos";

const Cabecera = ({fondoUrl}) => {

    const { nombre } = useParams();
    const [juego, setJuego] = useState([]);
    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState('');
    const crossOriginValue = true;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:8000/juegosNombre?nombre=${nombre}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Error al obtener el juego del backend');
          }
          const data = await response.json();
          setJuego(data);
        } catch (error) {
          console.error('Error al obtener el juego del backend:', error);
        }
      };
  
      fetchData();
    }, [nombre]);
  
    console.log(juego)
  
    if (!juego) {
      return <div>Cargando...</div>;
    }
  
    const handleBusqueda = () => {
      navigate(`/juegosNombre/${busqueda}`);
  };
  
  const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          handleBusqueda();
      }
  };
  
  const handleSearchButtonClick = () => {
      handleBusqueda();
  };

    return <>
        <script src="https://kit.fontawesome.com/19066b4921.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin = "true"/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <div className="cabecera">
            <div>
                <Link to="/"><img src={logo} alt="logo"></img></Link>
                <Link to="/"><h1>NEXOGAMER</h1></Link>
            </div>
            <div className="menu">
                <div className="container">
                <div>
            <div className="buscar">
                    <input type="text" placeholder="GTA V, Stardew Valley..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} onKeyDown={handleKeyDown} required />
                      <div className="btn" onClick={handleSearchButtonClick}>
                        <FontAwesomeIcon className="lupa" icon={icon({ name: 'magnifying-glass', family: 'classic', style: 'solid' })} />
                      </div>
                </div>
            </div>
                <ul>
                    <li>Ordenador</li>
                    <li>Playstation</li>
                    <li>Xbox</li>
                    <li>Nintendo</li>
                </ul>
                </div>
            </div>
            <div className="iconos">
                <div className="registrarse">
                    <FontAwesomeIcon className="right-to-bracket" icon={icon({ name: 'right-to-bracket', family: 'classic', style: 'solid' })}/>
                    <p>Regístrate</p>
                </div>
                <div className="login">
                    <FontAwesomeIcon className="user" icon={icon({ name: 'user', family: 'classic', style: 'solid' })}/>
                    <p>Iniciar sesión</p>
                </div>
                <div className="carrito">
                    <FontAwesomeIcon className="cart-shopping" icon={icon({ name: 'cart-shopping', family: 'classic', style: 'solid' })}/>
                    <p>Tus compras</p>
                </div>
            </div>
        </div>
        <CabeceraJuegos fondoUrl={fondoUrl}></CabeceraJuegos>
    </>
}

export default Cabecera;