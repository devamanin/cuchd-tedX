import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assests/logow.png'
import "./Home.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='head' >
      <Container style={{maxWidth:"1500px" }}>
        <Navbar.Brand href="/" style={{width:"80%"}}>
          <fig style={{}}>
            <img src={logo}
              width={"50%"} />
          </fig>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {/* <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="/blog" style={{ color: "white" }}>Blogs</Nav.Link>
            <Nav.Link href="/about" style={{ color: "white" }}>About</Nav.Link>
            <Nav.Link href="/cuchd" style={{ color: "white" }}>Cuchd</Nav.Link>
            <Nav.Link href="/teams" style={{ color: "white" }}>Teams</Nav.Link>
            <Nav.Link eventKey={2} href="/theme" style={{ color: "white" }}>Theme</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{ color: "white" }}>Help</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;