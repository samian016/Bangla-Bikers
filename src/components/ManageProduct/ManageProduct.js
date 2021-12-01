import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import Product from "./Product";
const ManageProduct = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://evening-meadow-55666.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const handelDelete = (id) => {
    const confirm = window.confirm("are you sure want to delete?");

    if (confirm) {
      const url = `https://evening-meadow-55666.herokuapp.com/product/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Canceled");
            const remainingOrder = packages.filter((orde) => orde._id !== id);
            setPackages(remainingOrder);
          }
        });
    } else {
      return;
    }
  };
  return (
    <div className="text-center my-5">
      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <Container className="mt-4">
          <hr className="border-bottom border border-dark border-3" />
          <h2 className="text-center text-success my-5">Our More Packages</h2>

          <Row className="g-4 mb-5">
            {packages.map((pkg) => (
              <Product
                key={pkg._id}
                handelDelete={handelDelete}
                package={pkg}
              ></Product>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ManageProduct;
