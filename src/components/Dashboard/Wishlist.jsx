import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Badge, Dropdown, Button } from "react-bootstrap";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../store/wishlist/WishlistThunk";

function Wishlist() {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  const statusVariant = {
    Pending: "warning",
    Dispatch: "info",
    Completed: "success",
  };

  return (
    <div>
      <div className="">
        <div className="container mt-3 mx-3">
          <h3>Wishlist</h3>

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

          <Table hover responsive className="shadow-sm rounded">
            <thead className="bg-light">
              <tr>
                <th>Customer</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item, index) => (
                <tr key={index} className={item.highlight ? "text-dark" : ""}>
                  <td>{item.image}</td>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>
                    <Badge bg={statusVariant[item.status] || "secondary"}>
                      {item.status || "Pending"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
