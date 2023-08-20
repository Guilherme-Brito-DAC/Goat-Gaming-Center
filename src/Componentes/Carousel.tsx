import React from 'react'
import './Carousel.css'

const Carousel = () => {
    let slideIndex = 0;

    function proximoSlide(n: any) {
        mostrarSlides(slideIndex += n);
    }

    function slideAtual(n: any) {
        mostrarSlides(slideIndex = n);
    }

    function mostrarSlides(n: any) {
        let i
        let slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>)

        if (n > slides.length)
            slideIndex = 1

        if (n < 1)
            slideIndex = slides.length

        for (i = 0; i < slides.length; i++)
            slides[i].style.display = "none"

        if (slides[slideIndex - 1])
            slides[slideIndex - 1].style.display = "block"
    }

    mostrarSlides(slideIndex);

    return (
        <div className='carousel'>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <img src={require("../Props/IRL/simulador.jpg")} style={{ width: "100%" }} alt="" />
                </div>
                <div className="mySlides fade">
                    <img src={require("../Props/IRL/goat.jpg")} style={{ width: "100%" }} alt="" />
                </div>
                <div className="mySlides fade">
                    <img src={require("../Props/IRL/goat2.jpg")} style={{ width: "100%" }} alt="" />
                </div>
                <div className="mySlides fade">
                    <img src={require("../Props/IRL/goat3.jpg")} style={{ width: "100%" }} alt="" />
                </div>

                <a className="prev" onClick={() => proximoSlide(-1)}>❮</a>
                <a className="next" onClick={() => proximoSlide(1)}>❯</a>
            </div >
            <br />
            <div style={{ textAlign: "center" }}>
                <span className="dot" onClick={() => slideAtual(1)}></span>
                <span className="dot" onClick={() => slideAtual(2)}></span>
                <span className="dot" onClick={() => slideAtual(3)}></span>
            </div>
        </div >
    )
}

export default Carousel