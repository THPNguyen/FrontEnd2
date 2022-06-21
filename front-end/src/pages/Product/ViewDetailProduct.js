import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
const ViewProduct = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    http.get("/products/" + id + "/edit").then((res) => {
      setInputs({
        product_name: res.data.product_name,
        product_price: res.data.product_price,
      });
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = (event) => {
    http.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label htmlFor="name">Tên Sản Phẩm</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-2"
              value={inputs.product_name || ""}
              onChange={handleChange}
            />
            <label htmlFor="email">Giá</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-2"
              value={inputs.product_price || ""}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={submitForm}
              className={"btn btn-primary"}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
