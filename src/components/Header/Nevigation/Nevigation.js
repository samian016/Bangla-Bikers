import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import useAuth from "../../../utilities/context/useAuth";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";
import SideBar from "../../sideBar/SideBar";

/* you might khow the component, yes this is navigation bar to navigate all  */
const Nevigation = () => {
  const { user, logOut } = useAuth();
  const handelLogOut = () => {
    logOut();
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            {" "}
            <h2>Bangla Bikers</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-primary align-items-md-center">
              <Nav.Link as={HashLink} className="navlink" to="">
                <SideBar></SideBar>
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink" to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={HashLink} className="navlink" to="/explore">
                Explore More
              </Nav.Link>

              {/* here this will run when user is logged in , here is the logout button and user name */}
              {user?.email ? (
                <>
                  <Nav.Link as={HashLink} className="navlink" to="/dashboard">
                    Dashboard
                  </Nav.Link>

                  <Button
                    type="button"
                    onClick={handelLogOut}
                    className="btn btn-danger me-3"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Nav.Link as={HashLink} className="navlink" to="/Login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as:
                  <span className="ms-2 text-white fw-bold">
                    {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
