import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { CircleHelp, Calendar } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import './dashboard.css'

const data = [
  { name: "Mon", current: 12000, previous: 10000 },
  { name: "Tue", current: 25000, previous: 22000 },
  { name: "Wed", current: 30000, previous: 28000 },
  { name: "Thu", current: 22000, previous: 25000 },
  { name: "Fri", current: 39312, previous: 38315 },
  { name: "Sat", current: 41000, previous: 34000 },
  { name: "Sun", current: 38000, previous: 32000 },
];

const data2 = [
   { name: "Deals", value: 51, color: "#8A7DF0" },
   { name: "Education", value: 18, color: "#F4C861" },
   { name: "Reviews", value: 31, color: "#F77C92" }
];

const Dashboard = () => {
  return (
    <div className="container mt-4 mx-3">
      <h4>
        Shopper Overview <CircleHelp />
      </h4>
      <Col md={11}>
        <Row className="cards mt-3">
          <Col md={3}>
            <Card
              className=" main-card lh-1  border-0 rounded-4 shadow"
              style={{ backgroundColor: "#F88AA5" }}
            >
              <Card.Body>
                <Card.Text className="text-light">NET SALES</Card.Text>
                <Card.Title className="text-white">$27,012</Card.Title>
                <Card.Text className="text-light">
                  + 2% than last week
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card
              className="main-card lh-1 text-white border-0 rounded-4 shadow"
              style={{ backgroundColor: "#B993F5" }}
            >
              <Card.Body>
                <Card.Text>ORDERS</Card.Text>
                <Card.Title>5,661</Card.Title>
                <Card.Text>+ 31,21% than last week</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card
              className=" main-card lh-1 text-white border-0 rounded-4 shadow"
              style={{ backgroundColor: "#69DCA7" }}
            >
              <Card.Body>
                <Card.Text>CUSTOMER</Card.Text>
                <Card.Title>15138</Card.Title>
                <Card.Text>+ 12% than last week</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card
              className=" main-card lh-1 text-white border-0 rounded-4 shadow"
              style={{ backgroundColor: "#F0C965" }}
            >
              <Card.Body>
                <Card.Text>GROWTH</Card.Text>
                <Card.Title>19.56</Card.Title>
                <Card.Text>- 487% than last week</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      <Row className="gx-2 gy-3 mt-2">
        {/* Left Chart Card */}
        <Col md={7}>
          <Card.Body>
            <div>
              <Card className=" chart1 p-4 shadow-lg rounded-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>
                    Sales Overview{" "}
                    <span className="text-muted">
                      <CircleHelp />
                    </span>
                  </h5>
                  <Button
                    variant="outline-light"
                    size="md"
                    style={{ backgroundColor: "#8F85F8", border: "none" }}
                  >
                    <Calendar size={18} className="mx-2" />
                    This Week
                  </Button>
                </div>
                <div className="d-flex gap-3 my-3">
                  <span className="text-success fw-bold">
                    $69,524 <small>(Current week)</small>
                  </span>
                  <span className="text-primary fw-bold">
                    $58,254 <small>(Previous week)</small>
                  </span>
                </div>
                <ResponsiveContainer width="100%" height={190}>
                  <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#adb5bd" />
                    <YAxis stroke="#adb5bd" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#1abc9c"
                      strokeWidth={2}
                      dot={{ r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="previous"
                      stroke="#6a5acd"
                      strokeWidth={2}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </Card.Body>
        </Col>

        {/* Right Pie Chart Card */}
        <Col md={4}>
          <Card.Body>
            <div>
              <Card className=" piechart1 p-4 shadow-lg rounded-3 text-center bg-dark text-light">
                <div className="d-flex justify-content-between">
                  <h5>
                    Aquisition{" "}
                    <span className="text-muted">
                      <CircleHelp />
                    </span>
                  </h5>
                  <Button variant="outline-light" size="sm">
                    This Week
                  </Button>
                </div>

                <ResponsiveContainer width="100%" height={170}>
                  <PieChart>
                    <Pie
                      data={data2}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="d-flex justify-content-around ">
                  <div>
                    <h4>12,912</h4>
                    <p className="text-muted">Reviews</p>
                  </div>
                  <div>
                    <h4>544</h4>
                    <p className="text-muted">Education</p>
                  </div>
                  <div>
                    <h4>3,179</h4>
                    <p className="text-muted">Deals</p>
                  </div>
                </div>
              </Card>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
