import React, { useState } from 'react';
import stardew_valley_vid from "../trailers/Stardew_Valley.mp4";
import dark_souls_vid from "../trailers/Dark_Souls_III.mp4";
import dbd_vid from "../trailers/dbd.mp4";
import elden_ring_vid from "../trailers/ELDEN_RING.mp4";
import fall_guys_vid from "../trailers/Fall_Guys.mp4";
import gtav_vid from "../trailers/gtav.mp4";
import lol_vid from "../trailers/lol.mp4";
import read_dead_dedemption_vid from "../trailers/rdr2.mp4";
import sea_of_thieves_vid from "../trailers/Sea_of_Thieves.mp4";
import valorant_vid from "../trailers/VALORANT.mp4";
import victory_road_vid from "../trailers/Victory_Road.mp4";
import '../JuegosNombre/JuegosNombre.css';

const JuegoConTrailer = ({ juego, id }) => {
    const [reproduciendo, setReproduciendo] = useState(false);

    const handleMouseEnter = () => {
        switch (juego.nombre) {
            case "Stardew Valley":
                setReproduciendo(true);
                break;
            case "Dark Souls III":
                setReproduciendo(true);
                break;
            case "Dead by Daylight":
                setReproduciendo(true);
                break;
            case "Elden Ring":
                setReproduciendo(true);
                break;
            case "Fall Guys":
                setReproduciendo(true);
                break;
            case "Grand Theft Auto V":
                setReproduciendo(true);
                break;
            case "League of Legends":
                setReproduciendo(true);
                break;
            case "Red Dead Redemption 2":
                setReproduciendo(true);
                break;
            case "Sea of Thieves":
                setReproduciendo(true);
                break;
            case "Valorant":
                setReproduciendo(true);
                break;
            case "Inazuma Eleven: Heroes Victory Road":
                setReproduciendo(true);
                break;
            default:
                setReproduciendo(false);
                break;
        }
    };

    const handleMouseLeave = () => {
        setReproduciendo(false);
    };
    
    return (
        <div className="juego-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {reproduciendo ? (
                renderVideo(juego.nombre)
            ) : (
                <img src={juego.imagenUrl} alt={juego.nombre} />
            )}
            <h2>{juego.nombre}</h2>
        </div>
    );
};

const renderVideo = (nombreJuego) => {
    switch (nombreJuego) {
        case "Stardew Valley":
            return <video src={stardew_valley_vid} className='trailer' autoPlay muted loop />;
        case "Dark Souls III":
            return <video src={dark_souls_vid} className='trailer' autoPlay muted loop />;
        case "Dead by Daylight":
            return <video src={dbd_vid} className='trailer' autoPlay muted loop />;
        case "Elden Ring":
            return <video src={elden_ring_vid} className='trailer' autoPlay muted loop />;
        case "Fall Guys":
            return <video src={fall_guys_vid} className='trailer' autoPlay muted loop />;
        case "Grand Theft Auto V":
            return <video src={gtav_vid} className='trailer' autoPlay muted loop />;
        case "League of Legends":
            return <video src={lol_vid} className='trailer' autoPlay muted loop />;
        case "Red Dead Redemption 2":
            return <video src={read_dead_dedemption_vid} className='trailer' autoPlay muted loop />;
        case "Sea of Thieves":
            return <video src={sea_of_thieves_vid} className='trailer' autoPlay muted loop />;
        case "Valorant":
            return <video src={valorant_vid} className='trailer' autoPlay muted loop />;
        case "Inazuma Eleven: Heroes Victory Road":
            return <video src={victory_road_vid} className='trailer' autoPlay muted loop />;
        default:
            return null;
    }
};

export default JuegoConTrailer;