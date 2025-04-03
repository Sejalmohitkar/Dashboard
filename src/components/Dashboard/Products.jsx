import React, { useEffect} from "react";
import { ShoppingCart } from "lucide-react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product/ProductThunk";
// import axios from "axios";

function Product() {

  // const [products, SetProducts] = useState([]);

  const dispatch = useDispatch();
  const{products, loading, error} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // const loadData = async () => {
  //   try{
  //     const response = await axios.get("https://dummyjson.com/products");
  //     console.log(response.data.products);
  //     SetProducts(response.data.products)
  //   }catch(error){
  //     console.log("Error Fetching Product", error);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div>
      <div className="">
          <div className="mt-3 mx-3">
            <h4>
              Hot Deals <ShoppingCart />
            </h4>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <Container className="mt-3">
              <Row xs={1} md={2} lg={4} className="g-4">
                {products.map((product) => (
                  <Col md={4} key={product.id}>
                    <Card className="shadow-lg border-0 rounded-4" style={{width:"270px", height:"420px"}}>
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={product.thumbnail}
                          className="rounded-top-4"
                        />
                        
                        {product.label && (
                          <Badge
                            bg={product.label === "Sale" ? "primary" : "danger"}
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                            }}
                          >
                            {product.label}
                          </Badge>
                        )}
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          {product.title}
                        </Card.Title>
                        <Card.Text className="text-muted text-truncate">
                          {product.description}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">{product.price}</span>
                          <Button variant="outline-primary" size="sm">
                            EDIT
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
  
  );
}

export default Product;
