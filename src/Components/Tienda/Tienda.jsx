import "../GeneralComponentes.css";
import '../Home/Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function BasicExample() {
  return (
      <><><h3 className="desta">JUEGOS MAS ESPERADOS EN FULL STACK GAMES</h3></><div className="cardContainer">

          <div className="card1">
              <Card.Img variant="top" src="/img/Tienda/fifa24.jpg" />
              <Card.Body>
                  <Card.Title>FIFA 24</Card.Title>
                  <Card.Text>
                      EA SPORTS FC 24 es un increíble juego de fútbol que te sumerge en una experiencia realista y auténtica. Con 3 nuevas tecnologías revolucionarias, cada partido se siente más cercano a la realidad que nunca. Más de 19.000 jugadores, 700 equipos y 30 ligas, el juego te ofrece una autenticidad sin igual en el campo de juego.
                      Español latino
                      Multijugador local
                      Juego Original y Completo
                      <br />
                      <br />
                      <br />

                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
              </Card.Body>
          </div>

          <div className="card2">
              <Card.Img variant="top" src="/img/Tienda/gtaV.jpg" />
              <Card.Body>
                  <Card.Title>GRAND THEFT AUTO</Card.Title>
                  <Card.Text>
                      Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
              </Card.Body>
          </div>

          <div className="card3">
              <Card.Img variant="top" src="/img/Tienda/mortal-kombat-11.jpg" />
              <Card.Body>
                  <Card.Title>MORTAL KOMBAT 11</Card.Title>
                  <Card.Text>
                      Con opciones de personalización interminables, esta entrega brinda más control en la pelea y una experiencia más profunda y personalizada que nunca en una narrativa nueva que se enfrenta al Raiden contra Kronika, el Guardián del Tiempo.
                      Peso: 39.79 GB
                      Español Latino
                      Multijugador local
                      Juego Original y Completo
                      <br />
                      <br />
                      <br />
                      <br />


                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
              </Card.Body>
          </div>


          <div className="card4">
              <Card.Img variant="top" src="/img/Tienda/Call-of-Duty.jpg" />
              <Card.Body>
                  <Card.Title>CALL OF DUTY: Warzone</Card.Title>
                  <Card.Text>
                      Preparáte para una lucha épica contra la amenaza definitiva en Call of Duty Modern Warfare III. Peleá junto al capitán Price y la Fuerza operativa 141 en su batalla contra Vladimir Makarov mientras ajustan cuentas y crean nuevos desafíos. Celebrá el 20 aniversario de Call of Duty con una amplia colección de mapas multijugador, incluyendo nuevos y favoritos de los fans.

                      Español latino
                      Multijugador local
                      Juego Original y Completo
                  </Card.Text>
                  <Button variant="primary">Comprar</Button>
              </Card.Body>
          </div>




      </div></>
  );
}

export default BasicExample;