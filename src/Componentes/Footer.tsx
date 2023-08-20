import React from 'react'
import './Footer.css';

const Footer = () => {
    const anoAtual = new Date().getFullYear()

    return (
        <footer className='container'>
            <h2 className='trademark'>©{anoAtual} GOAT.</h2>
            <div className='redes-sociais'>
                <a target="_blank" href="https://www.instagram.com/goat.ggc/" rel="noreferrer">
                    <img src={require("../Props/Icones/instagram.png")} alt="" />
                </a>
                <a target="_blank" href="https://www.twitch.tv/goatgamingcenter" rel="noreferrer">
                    <img src={require("../Props/Icones/twitch.png")} alt="" />
                </a>
                <a target="_blank" href="https://www.tiktok.com/@goat.gc" rel="noreferrer">
                    <img src={require("../Props/Icones/tiktok.png")} alt="" />
                </a>
            </div>
        </footer>
    )
}

export default Footer