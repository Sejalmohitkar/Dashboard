import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { CircleHelp } from "lucide-react";
import React1, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { AreaChart, Area } from "recharts";


function Revenue() {
  const data = [
    { name: "Deals", value: 51, color: "#8A7DF0" },
    { name: "Education", value: 18, color: "#F4C861" },
    { name: "Reviews", value: 31, color: "#F77C92" },
  ];

  const data2 = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const data3 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="">
        <Container className="mt-2">
          <h3>Revenue</h3>

          <Row className="gx-2 gy-3">
            {/* Left Column - Acquisition Pie Chart */}
            <Col md={6}>
              <Card className="p-4 shadow-lg rounded-3 text-center bg-white text-dark">
                <div className="d-flex justify-content-between align-items-center">
                  <h5>
                    Acquisition{" "}
                    <span className="text-muted">
                      <CircleHelp size={18} />
                    </span>
                  </h5>
                  <Button variant="outline-light" size="sm">
                    This Week
                  </Button>
                </div>

                {/* Pie Chart Section */}
                <div style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
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
                </div>

                {/* Summary Section */}
                <div className="d-flex justify-content-around mt-3">
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
            </Col>

            {/* Right Column - Placeholder for Future Content */}
            <Col md={6}>
              <Card className="p-4 shadow-lg rounded-3 text-center">
                <ResponsiveContainer width="100%" height={325}>
                  <BarChart
                    data={data2}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    barSize={20}
                  >
                    <XAxis
                      dataKey="name"
                      scale="point"
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar
                      dataKey="pv"
                      fill="#8884d8"
                      background={{ fill: "#eee" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
          <Row className="gx-2 gy-3 mt-2">
            {/* Area Chart */}
            <Col md={12}>
              <Card className="p-3 shadow-lg rounded-3 text-center">
                <h5>Revenue Growth</h5>
                <div style={{ width: "100%", height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data3}
                      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Revenue;
