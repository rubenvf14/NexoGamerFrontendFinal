import React, { useState, useEffect } from 'react';
import './CabeceraJuegos.css'; // Importa el archivo de estilos CSS

function CabeceraJuegos() {
  const [fondoUrl, setFondoUrl] = useState('');
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [juegos, setJuegos] = useState([]);
  const [opacity, setOpacity] = useState(0); // Estado para la opacidad de la imagen de fondo
  const [imageLoading, setImageLoading] = useState(true); // Estado para controlar la carga de la imagen

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/juegos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener los juegos del backend');
        }
        const data = await response.json();
        setJuegos(data);
        if (data.length > 0 && !fondoUrl) {
          setFondoUrl(data[0].urlImagen); // Establece la primera imagen
        }
      } catch (error) {
        console.error('Error al obtener los juegos del backend:', error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      if (juegos.length > 0) {
        const nextIndex = (indiceImagen + 1) % juegos.length;
        setIndiceImagen(nextIndex);
        setImageLoading(true); // Mostrar indicador de carga
        setOpacity(0); // Cambia la opacidad a 0
        setTimeout(() => {
          setFondoUrl(juegos[nextIndex].urlImagen);
          setOpacity(1); // Cambia la opacidad a 1 después de que cambie la imagen
          setImageLoading(false); // Ocultar indicador de carga
        }, 500); // Espera 500 ms antes de cambiar la imagen para que la transición sea visible
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [indiceImagen]);

  const cambiarImagen = (index) => {
    setIndiceImagen(index);
    setImageLoading(true); // Mostrar indicador de carga
    setOpacity(0); // Cambia la opacidad a 0
    setTimeout(() => {
      setFondoUrl(juegos[index].urlImagen);
      setOpacity(1); // Cambia la opacidad a 1 después de cambiar la imagen
      setImageLoading(false); // Ocultar indicador de carga
    }, 500); // Espera 500 ms antes de cambiar la imagen para que la transición sea visible
  };

  return (
    <div className='cabeceraJuegos'>
      <div className='fondo-container'>
        {/* Imagen de fondo con transición de opacidad */}
          <img
            src={fondoUrl}
            alt='imagen'
            className='fondo-imagen'
            style={{ opacity: opacity }} // Aplica la opacidad dinámica
            width='100%'
          />
        {/* Botones redondos */}
        <div className='botones-container'>
          {juegos.map((juego, index) => (
            <button
              key={juego.id}
              onClick={() => cambiarImagen(index)}
              className={indiceImagen === index ? 'boton-activo' : 'boton-inactivo'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CabeceraJuegos;
