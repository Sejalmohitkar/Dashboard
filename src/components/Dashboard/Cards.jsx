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
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Pagination } from "react-bootstrap";
import Image from "../../assets/card.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store/cards/CardsThunk";
import { postCards, deleteCards, putCards, patchCards } from "../../store/cards/CardsThunk";

function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //redux toolkit
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  //post method
  const [formData, setFormData] = useState({
    title: "",
    userId: "",
  });

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    console.log(formData);
    await dispatch(postCards(formData)).then(() => {
      console.log("post added");
      setFormData({ title: "", userId: 0 });
      handleClose();
    });
  };

  //delete cards
  const handleDelete = (id) => {
    dispatch(deleteCards(id));
  };

  //put method to update cards
  const handleUpdate = (id, updatedData) => {
    dispatch(putCards({ id, updatedData }));
  };

  //path method to update card
  const handlePatch = () => {
    dispatch(patchCards({ id: 5, patchData: { title: "Partially updated title" } }));
  };

  //pagination
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = cards.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(cards.length / postPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    <Form.Control
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="userId"
                      type="number"
                      value={formData.userId}
                      onChange={(e) =>
                        setFormData({ ...formData, userId: e.target.value })
                      }
                      rows={3}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
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

        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
          {currentPosts.map((card, idx) => {
            if (!card) return null;
            return (
              <Col key={idx}>
                <Card className="border-0 shadow-sm h-100 rounded-4 text-white overflow-hidden">
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      src={Image}
                      className="rounded-4"
                      style={{ height: "250px"}}
                    />
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
                      <Card.Title className="h6 fw-bold">
                        {card.title}
                      </Card.Title>
                      {/* deleteCards button */}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(card.id)}
                        className="mx-2"
                      >
                        Delete
                      </Button>

                      {/* update Button */}
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleUpdate(card.id)}
                        className="mx-2"
                      >
                        Put
                      </Button>

                      {/* update Button */}
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handlePatch(card.id)}
                      >
                       Patch 
                      </Button>



                    </Card.Body>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-3">
        <Pagination>
          <Pagination.First
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default Cards;
