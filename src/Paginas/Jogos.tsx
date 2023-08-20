import React from 'react'
import './Jogos.css'

const Jogos = () => {
    return (
        <div>
            <h2>Computadores do 1 ao 10</h2>
            <div className='galeria'>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/csgo.jpg")} />
                    <p className="descricao">Counter Strike Global Offensive</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/valorant.jpg")} />
                    <p className="descricao">Valorant</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/lol.png")} />
                    <p className="descricao">League of Legends</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/dota2.jpg")} />
                    <p className="descricao">Dota 2</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/fortnite.jpg")} />
                    <p className="descricao">Fortnite</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/rainbow.png")} />
                    <p className="descricao">Rainbow Six Siege</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/overwatch.png")} />
                    <p className="descricao">Overwatch</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/codwarzone.png")} />
                    <p className="descricao">Call of Duty - Warzone</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/codhq.png")} />
                    <p className="descricao">Call of Duty - HQ</p>
                </div>
            </div>
            <h2>Computadores do 11 ao 20 (Além de todos os jogos acima)</h2>
            <div className='galeria'>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/apex.jpg")} />
                    <p className="descricao">Apex Legends</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/rocketleague.jpg")} />
                    <p className="descricao">Rocket League</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/pubg.jpg")} />
                    <p className="descricao">PUBG: Battlegrounds</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/gta.jpg")} />
                    <p className="descricao">GTA V</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/fallguys.jpg")} />
                    <p className="descricao">Fall Guys</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/rust.jpg")} />
                    <p className="descricao">Rust</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/smite.jpg")} />
                    <p className="descricao">Smite</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/tf2.jpg")} />
                    <p className="descricao">Team Fortress 2</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/diablo.jpg")} />
                    <p className="descricao">Diablo III</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/hearthstone.jpg")} />
                    <p className="descricao">Hearthstone</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/guiltygears.png")} />
                    <p className="descricao">Guilty Gears</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/freefire.png")} />
                    <p className="descricao">Free Fire</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/nfs.png")} />
                    <p className="descricao">Need for Speed Heat</p>
                </div>
            </div>
            <h2>Simulador de Corrida</h2>
            <div className='galeria'>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/assettocorsa.png")} />
                    <p className="descricao">Assetto Corsa</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/f1.jpg")} />
                    <p className="descricao">F1 2022</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/forza.jpg")} />
                    <p className="descricao">Forza V</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/nfs.png")} />
                    <p className="descricao">Need for Speed Heat</p>
                </div>
                <div className="jogo">
                    <img alt="" src={require("../Props/Games/iracing.jpeg")} />
                    <p className="descricao">IRacing</p>
                </div>
            </div>
        </div>
    )
}

export default Jogos