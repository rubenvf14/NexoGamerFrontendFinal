import { useState } from 'react';
import CabeceraGlobal from '../CabeceraGlobal/CabeceraGlobal';
import JuegoConTrailer from '../JuegoConTrailer/JuegoConTrailer';

const JuegosNombre = () => {

    const [juego, setJuego] = useState([]);

  return (
    <>
        <CabeceraGlobal></CabeceraGlobal>
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