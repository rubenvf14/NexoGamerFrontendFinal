import React, { useState, useRef } from "react";
import "./LoginRegister.css";
import logo from "../nexoGamerFinal.png";
import { Link } from "react-router-dom";
import fondo from "./fondo/fondo2.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Register = () => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(videoRef.current.muted);
        }
    };

    return (
        <>
            <script src="https://kit.fontawesome.com/19066b4921.js" crossOrigin="anonymous"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <div className="cabeceraRegister">
                <Link to={"/"}><img src={logo} alt="logo"></img></Link>
                <Link to={"/"} className="sin-subrayado"><h1>NEXOGAMER</h1></Link>
            </div>
            <div className="videoDerecha">
            <div className="formularioLogin">
                <h1>Iniciar sesión</h1>
                <form action="post" className="loginForm">
                    <label for="nombre">Nombre de usuario</label>
                    <input type="text" id="nombre" alt="nombre" placeholder="Rubén" className="campo"></input>
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" alt="password" placeholder="S€gUr4" className="campo"></input>
                    <input type="submit" placeholder="Enviar" className="submitLogin"></input>
                </form>
                <p>¿No tienes una cuenta? <Link to={"/register"}>Regístrate</Link></p>
            </div>
                <video ref={videoRef} src={fondo} autoPlay loop controls={false}></video>
                    {muted ? <FontAwesomeIcon className="muted" icon={icon({ name: 'volume-xmark', family: 'classic', style: 'solid' })} onClick={toggleMute}/> : <FontAwesomeIcon className="no-muted" icon={icon({ name: 'volume-high', family: 'classic', style: 'solid' })} onClick={toggleMute}/>}
            </div>
        </>
    );
}

export default Register;
