import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./InfoJuegos.css"
import CabeceraGlobal from '../CabeceraGlobal/CabeceraGlobal';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from "../nexoGamerFinal.png";

const InfoJuegos = () => {
  const parametro = useParams(); // Obtiene el parámetro 'id' de la URL
  const [juego, setJuego] = useState(null);

  // Aquí puedes realizar una solicitud para obtener los detalles del juego utilizando el ID

  useEffect(() => {
    const fetchJuego = async () => {
      try {
        const response = await fetch('http://localhost:8000/juegos');
        if (!response.ok) {
          throw new Error('Error al obtener los juegos');
        }
        const data = await response.json();
        // Convertir el ID a entero
        const idEntero = parseInt(parametro.id);
        // Filtrar el juego por el ID obtenido de la URL
        const juegoEncontrado = data.find(juego => juego.id === idEntero);
        if (juegoEncontrado) {
          setJuego(juegoEncontrado);
        } else {
          throw new Error(`No se encontró ningún juego con el ID ${parametro.id}`);
        }
      } catch (error) {
        console.error('Error al obtener los detalles del juego:', error);
      }
    };

    fetchJuego();
  }, [parametro.id]);

  console.log(juego)

  // Aquí renderizas los detalles del juego

  return (
    <>
      <CabeceraGlobal />
      <div className='generalContainer2'>
        {/* Verifica si juego tiene un valor antes de intentar acceder a sus propiedades */}
        {juego && (
          <div className='information1'>
            <div className='contenedorImagen'>
              <Link to="/inicio"><img src={juego.urlImagen} alt={juego.nombre} /></Link>
              {juego.rebaja !== 0 && <div className='etiquetaNaranja2'>-{juego.rebaja}%</div>}
            </div>
            <div className='texto'>
              <h2 className='nombre2'>{juego.nombre.length > 20 ? juego.nombre.substring(0, 20) + '...' : juego.nombre}</h2>
              {juego.precio === "0.00" ? <h2 className="precio2">Gratuito</h2> : <h2 className="precio2">{(juego.precio - (juego.precio * (juego.rebaja / 100))).toFixed(2)}€</h2>}
            </div>
          </div>
        )}
        {/* Renderiza los detalles del juego si juego tiene un valor */}
        {juego && (
          <div className='information2'>
            <div>
              <h2>Descripción</h2>
              <p>{juego.descripcion}</p>
              <div className='moreInformation'>
                <div className='gender'>
                  <h2>{juego.genero.includes('/') ? 'Géneros' : 'Género'}</h2>
                  <p className='centrado'>{juego.genero}</p>
                </div>
                <div className='plataforma'>
                  <div className='plataformas-container'>
                    <h2>{juego.consola.includes('/') ? 'Plataformas' : 'Plataforma'}</h2>
                      <div className='plataformas-list'>
                        {juego.consola.split('/').map((consola, index) => (
                          <div key={index} className='plataforma-item'>{consola.trim()}</div>
                        ))}
                      </div>
                    </div>
                </div>
                <div className='compañia'>
                  <div className="companias-container">
                    <h2>{juego.compañia.includes(',') ? 'Compañías' : 'Compañía'}</h2>
                    <div className='companias-list'>
                      {juego.compañia.split(',').map((compania, index) => (
                        <div key={index} className='compania-item'>{compania.trim()}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='estrellas'>
                <h2>Valoración</h2>
                <StarRating rating={juego.valoracion} size={24}></StarRating>
              </div>
              <div className='añadirComentario'>
                <h2>¡Añade aquí tu comentario!</h2>
                <div className='comentarioFinal'>
                    <textarea alt='comentario' className="comentarioAñadido" maxLength={200} placeholder='Pon el mejor comentario que se te ocurra :D'></textarea>
                    <div><FontAwesomeIcon className="paper-plane" icon={icon({ name: 'paper-plane', family: 'classic', style: 'solid' })} /></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="footer">
                <div className="leftFooter">
                    <Link to="/">Aviso legal</Link>
                    <Link to="/">Cookies</Link>
                </div>
                <div className="rightFooter">
                    <Link to="/"><img src={logo} alt="logo" className="miniLogo"></img></Link>
                    <Link to="/" className="sin-subrayado"><h2>NEXOGAMER</h2></Link>
                </div>
            </div>
    </>
  );
}

export default InfoJuegos;
