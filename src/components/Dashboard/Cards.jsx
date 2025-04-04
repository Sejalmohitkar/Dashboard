import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";
// import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store/cards/CardsThunk";

function Cards() {
  // const [blog, setBlog] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/posts")
  //     .then((response) => {
  //       setBlog(response.data.posts);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const{cards, loading, error} = useSelector((state) => state.card);
 
   useEffect(() => {
     dispatch(getCards());
   }, [dispatch]);

  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Blog...</h2>

          <Button variant="dark" onClick={handleShow}>
            + New post
          </Button>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{
              position: "fixed",
              bottom: "20px",
              left: "20px",
              margin: "0",
              zIndex: "1050",
            }}
          >
            <div style={{ borderRadius: "12px", padding: "20px" }}>
              <Modal.Header closeButton>
                <Modal.Title>NEW POST</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" autoFocus />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>

        <div className="d-flex justify-content-between mb-4">
          <InputGroup style={{ maxWidth: "300px" }}>
            <InputGroup.Text>
              <FaCommentDots />
            </InputGroup.Text>
            <FormControl placeholder="Search post..." />
          </InputGroup>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Latest
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Popular</Dropdown.Item>
              <Dropdown.Item>Trending</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {cards.map((card, idx) => (
            <Col key={idx}>
              <Card className="border-0 shadow-sm h-100 rounded-4 text-white overflow-hidden">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    src={
                      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                    }
                    className="rounded-4"
                    style={{ height: "250px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  ></div>
                  <Card.Body
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                      padding: "20px",
                    }}
                  >
                    <Card.Title className="h6 fw-bold">{card.title}</Card.Title>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Cards;
