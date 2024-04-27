import { useState } from 'react';
import Cabecera from '../Cabecera/Cabecera';
import JuegoConTrailer from '../JuegoConTrailer/JuegoConTrailer';

const JuegosNombre = () => {

    const [juego, setJuego] = useState([]);

  return (
    <>
        <Cabecera></Cabecera>
        <div className='carteleraJuegos'>
            {juego.map((juego) => (
                <div key={juego.id}>
                    <JuegoConTrailer juego={juego} id={juego.id} />
                </div>
                ))}
            </div>
        </>
    );
};

export default JuegosNombre;