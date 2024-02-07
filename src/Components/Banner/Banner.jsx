import './Banner.css'
import React from 'react';

function Banner() {
    return (
        <>
        <div className="logo">
            <img className="isologo"
                src="/img/logo.png"
                alt="Isologo" />
        </div>
        
        <div className="nombrelogo">
                <h1 className='h1'>FullStack Games</h1>
                <h4 className='h4'>Entretenimiento Asegurado</h4>
        </div>
        </>

)
}

export default Banner;



