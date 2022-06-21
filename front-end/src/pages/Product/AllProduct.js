import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../http";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);
  
  const fetchAllProducts = () => {
    http.get("/products").then((res) => {
      console.log(res.data);
        setProducts(res.data);
    });
  };
  const deleteProducts = (id) => {
    http.delete("/products/" + id).then((res) => {
        fetchAllProducts();
    });
  };
  return (
    <div>
      <h2>Users listing ....</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Acion</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{++index}</td>
              <td>{product.product_name}</td>
              <td>{product.product_photo}</td>
              <td>{product.product_description}</td>
              <td>{product.product_price}</td>
              <td>
                <Link
                  className="btn btn-warning"
                  to={{ pathname: "/products/edit/" + product.id }}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-primary"
                  to={{ pathname: "/products/view/" + product.id }}
                >
                  View
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={()=>{deleteProducts(product.id)}}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
