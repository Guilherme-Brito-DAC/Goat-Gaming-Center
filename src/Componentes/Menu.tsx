import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {

    const abrirWhatsApp = () => {
        window.open("https://wa.me/+5531998365247")
    }

    return (
        <header className='container'>
            <div>
                <img src={require("../Props/logo.png")} className='logo' alt="Logo" />
            </div>
            <div className='links'>
                <NavLink to="/" className="link" >
                    Home
                </NavLink>
                <NavLink to="/setup" className="link">
                    Setup
                </NavLink>
                <NavLink to="/jogos" className="link">
                    Jogos
                </NavLink>
                <NavLink to="/cadastro" className="link">
                    Cadastro
                </NavLink>
                <NavLink to="/localizacao" className="link">
                    Localização
                </NavLink>
                <button type='button' className='botao' onClick={() => abrirWhatsApp()}>
                    Reservas
                </button>
            </div>
        </header>
    )
}

export default Menu