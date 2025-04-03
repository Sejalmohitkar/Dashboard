import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {Badge, Dropdown, Button } from "react-bootstrap";
import axios from 'axios';

function Wishlist() {
    
  const [wishlist, SetWishlist] = useState([]);

  const loadData = async () => {
    try{
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response.data.users);
      SetWishlist(response.data.users);
    }catch(error){
      console.log("Error Fetching Wishlist", error);
    }
  }
  
  useEffect(() => {
    loadData();
  }, []);

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
          {wishlist.map((wishlist, index) => (
            <tr key={index} className={wishlist.highlight ? " text-dark" : ""}>
              <td>{wishlist.image}</td>
              <td>{wishlist.firstName} {wishlist.lastName}</td>
              <td>{wishlist.email}</td>
              <td>{wishlist.age}</td>
              <td>{wishlist.gender}</td>
              <td>
              <Badge bg={statusVariant[wishlist.status] || "secondary"}>
              {wishlist.status || "Pending"}
              </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
            </div>
          </div>  
  )
}

export default Wishlist;


