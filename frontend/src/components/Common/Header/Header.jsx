import React from 'react'
import { Container, Navbar, Offcanvas } from 'react-bootstrap'

const Header = () => {
  return (
    <section className="header-section">
        <Container>
            <Row>
                <Navbar expand={expand}
                className="bg-body-tertiary mb-3"
                >

                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end">
                        <Offcanvas.Header closeButton>
                            
                        </Offcanvas.Header>
                    </Navbar.Offcanvas>

                </Navbar>
            </Row>
            
        </Container>      
    </section >
  )
}

export default Header
