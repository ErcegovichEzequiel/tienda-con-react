import React from 'react';

function Banner() {
    return (
        <section className='banner'>
        <div className="logo">
            <img className="isologo"
                src="/img/logo.png"
                alt="Isologo" />
        </div>
        
        <div className="nombrelogo">
                <h1 className='nombre'>FullStack Games</h1>
                <h4 className='frase'>Entretenimiento Asegurado</h4>
        </div>
        </section>
)
}

export default Banner;



