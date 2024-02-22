import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <div className='banner'>
        <img src={logo} alt='Logo' className='logo' />
        <h1>Recetas de cocina</h1>
      </div>
      <div className='barra-busqueda'>
        <div className='inputBusqueda'>
          <InputGroup className="mb-3 inputBusqueda">
            <Form.Control
              placeholder="Nombre de la receta"
              aria-label="Nombre de la receta"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Buscar
            </Button>
          </InputGroup>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='text-center' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./HamburguesaConPapas.jpg" />
                <Card.Body>
                  <Card.Title>Hamburguesa con papas</Card.Title>
                  <Card.Text>
                    Prueba nuestra Hamburguesa con Papas tradiciones de la casa aderezados con nuestras salsas caceras por un económico precio.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
}

export default App;
