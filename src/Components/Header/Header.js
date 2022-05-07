import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src="https://i.ibb.co/vDfR58n/download-2.png" alt="" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      {user && (
            <>
              <Nav.Link as={Link} to="manageItem">
                Manage Item
              </Nav.Link>
              <Nav.Link as={Link} to="addItem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="myItem">
                My item
              </Nav.Link>
            </>
          )}
          
      </Nav>
      {user ? (
            <button type="button" class="btn btn-secondary "onClick={handleSignOut}>sign out </button>) :
               (
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
          )}
       
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    // <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top ">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             {" "}
    //             <Link to="/">Home</Link>
    //           </a>
    //         </li>
    //         <Nav.Link as={Link} to="/blog">Blog</Nav.Link>

    //         {/* <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             {" "}
    //             <Link to="/blog">Blog</Link>
    //           </a>
    //         </li> */}

    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             {" "}
    //             <Link to="/inventory">Inventory</Link>
    //           </a>
    //         </li>
    //       </ul>
          // {user && (
          //   <>
          //     <Nav.Link as={Link} to="manageItem">
          //       Manage Item
          //     </Nav.Link>
          //     <Nav.Link as={Link} to="addItem">
          //       Add Item
          //     </Nav.Link>
          //     <Nav.Link as={Link} to="myItem">
          //       My item
          //     </Nav.Link>
          //   </>
          // )}
          // {user ? (
          //   <button
          //     className="btn btn-link text-white text-decoration-none"
          //     onClick={handleSignOut}
          //   >
          //     sign out
          //   </button>
          // ) : (
          //   <Nav.Link as={Link} to="login">
          //     Login
          //   </Nav.Link>
          // )}
    //     </div>
    //   </div>
    // </nav>
    // <div>
    //     <nav>
    //         <Link to='/'>Home</Link>
    //         <Link to="/about">About</Link>
    //         <Link to="/service">Service</Link>
    //         <Link to="/inventory">Inventory</Link>
    //         <Link to="/login">Login</Link>
    //         <Link to="/singup">Sing Up</Link>
    //     </nav>
    // </div>
  );
};

export default Header;
