import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Home.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='head' >
      <Container>
        <Navbar.Brand href="#home">
            <fig>
                <img src='https://static.wixstatic.com/media/f88825_2d1c92934dea4cf7abe0c5675d25bc68~mv2_d_3650_1729_s_2.png/v1/crop/x_0,y_0,w_3650,h_898/fill/w_263,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TEDxCU_logo_transparent_black_type.png' 
                width={"85%"}  />
            </fig>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color:"white"}}>Blogs</Nav.Link>
            <Nav.Link href="#deets" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="#deets"style={{color:"white"}}>Speakers</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color:"white"}}>Theme</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color:"white"}}>Team</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"style={{color:"white"}}>Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;