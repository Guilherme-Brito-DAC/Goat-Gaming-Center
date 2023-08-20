import React from 'react'
import "./Setup.css"

const Setup = () => {
    return (
        <div className='setup'>
            <div>
                <h1>Hardware PC</h1>
                <p>Placa-mãe MSI PRO B660M-A</p>
                <p>Processador Intel Core i5 12th Geração</p>
                <p>Placa de Vídeo Nvidia GeForce RTX 2060</p>
                <p>Memória RAM HyperX Fury 16GB 3200mhz</p>
            </div>

            <div>
                <h1>Periféricos PC</h1>
                <p>Monitor Gamer Asus 24.5′ Wide, 0.5ms, 165Hz</p>
                <p>Teclado Mecânico Gamer Redragon Kumara</p>
                <p>Mouse Gamer HyperX Pulsefire Core RGB 6200DPI</p>
                <p>Headset Gamer Redragon Zeus X, Chroma Mk.II, Surround 7.1</p>
            </div>

            <div>
                <h1>Simulador de Corrida</h1>
                <p>Banco e suporte Extreme Sim Racing</p>
                <p>Volante ThrustMaster T300</p>
                <p>Monitores AOC 165hz 24.5′</p>
                <p>Pedal Hidráulico FF SimParts</p>
            </div>

            <div>
                <h1>Outros</h1>
                <p>Console 02 Xbox One S</p>
                <p>Simulador de VR Oculus Rift Quest 2</p>
            </div>
        </div>
    )
}

export default Setup