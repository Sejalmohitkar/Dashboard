import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Badge } from "react-bootstrap";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../store/wishlist/WishlistThunk";
import { Pagination } from "react-bootstrap";

function Wishlist() {

  //pagination//
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  
  //redux toolkit
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

  
  //pagination
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = wishlist.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(wishlist.length / postPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              {currentPosts.map((item, index) => (
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
    </div>
  );
}

export default Wishlist;
