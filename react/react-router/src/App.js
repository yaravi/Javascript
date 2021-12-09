import './App.css';
import { Navbar, Nav, Container, Card, Button } from "react-bootstrap";
import { Switch, Route, Link, useLocation, useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Linkcontainer} from "react-router-bootstrap"
import React from 'react';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
							<Nav.Link as={Link} to="/contact">Contact</Nav.Link>
						</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>	
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/portfolio'>
					<Portfolio />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
				<Route path='/portfolio/:pid'>
					<PortfolioDetail />
				</Route>
				<Route path='*'>
					<Error404 />
				</Route>
			</Switch>
		</div>
	);
}

function Home(){
	return (
		<h1>Home</h1>
	);
}
function Portfolio(){
	return (
		<React.Fragment>
			<h1>Portfolio</h1>
			<Container>
				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Pinterest</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
					</Card.Text>
					<Button as={Link} to='/portfolio/1' variant="primary">Go somewhere</Button>
				</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Cajero</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
					</Card.Text>
					<Button as={Link} to='/portfolio/2' variant="primary">Go somewhere</Button>
				</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Pokedex</Card.Title>
					<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
					</Card.Text>
					<Button as={Link} to='/portfolio/3' variant="primary">Go somewhere</Button>
				</Card.Body>
				</Card>
			</Container>
		</React.Fragment>
	);
}
function PortfolioDetail (){
	let {pid} = useParams();
	const proyectos = [
		{id:1 , nombre:"Pinterest", desc:"Pinterest"},
		{id:2 , nombre:"Cajero", desc:"Cajero"},
		{id:3 , nombre:"Pokedex", desc:"Pokedex"}
	]
	return (
		<React.Fragment>
			<h1> Detalle portafolio </h1>
			<ul>
				<li> ID: {proyectos[ pid -1].id}</li>
				<li> Nombre: {proyectos[ pid -1].nombre}</li>
				<li> Descripcion: {proyectos[ pid -1].desc}</li>
			</ul>
			<Button variant="danger" as={Link} to='/portfolio'>Return to portfolio</Button>
		</React.Fragment>
	);
}
function Contact(){
	return (
		<h1>Contact</h1>
	);
}
function Error404() {
	let location  = useLocation();
	console.log(location);
	return (
		<React.Fragment>
			<h1>Error 404</h1>
			<p>No se encontro la ruta: {location.pathname} </p>
			<p>No se encontro la ruta: {window.location.href} </p>
		</React.Fragment>
	);
}
export default App;
