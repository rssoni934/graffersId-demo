import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import starLogo from "../../assets/starLogo.png";
import searchIcon from "../../assets/search.png";
import reviewandrate from "../../assets/Review&Rate.png";
import "./navbar.css";
import InputBox from "../../common/searchbox";
import { useContext } from "react";
import GlobalContext from "../../common/context/GlobalContext";

function NavBar() {
  const { setSearchText, searchText } =
  useContext(GlobalContext);

  return (
    <Navbar expand="lg" className="d-flex flex-row align-items-center header">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={starLogo}
            height={30}
            width={30}
            style={{ marginRight: "10px" }}
          />
          <img src={reviewandrate} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <InputBox
              cssClass={"searchbox"}
              placeholder={"Search..."}
              inputImage={searchIcon}
              handleChange={(e)=>setSearchText(e.target.value)}
            />
            <Button variant="link" className="logBtn">
              SignUp
            </Button>
            <Button variant="link" className="logBtn">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
