import { Nav } from "react-bootstrap";

function Footer() {
  return (
    <Nav
      className="navbar navbar-secondary bg-secondary d-flex align-items-center justify-content-center"
      style={{ height: "86px" }}
    >
      <div className="container-fluid d-flex justify-content-center">
        <span className="text-white">Thanks for coming to our wedding</span>
      </div>
    </Nav>
  );
}

export default Footer;
