import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
const EditProduct = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchCategory = () => {
    http.get("/categories/" + id + "/edit").then((res) => {
      setInputs({
        category_name: res.data.category_name,
      });
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = (event) => {
    http.put("/categories/" + id, inputs).then((res) => {
      navigate("/categories");
    });
  };
  return (
    <div>
      <h2>Edit Category</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label htmlFor="category_name">Category</label>
            <input
              type="text"
              name="category_name"
              id="category_name"
              className="form-control mb-2"
              value={inputs.category_name || ""}
              onChange={handleChange}
            />
            {/* <label htmlFor="product_price">Email</label>
            {/* <input
              type="number"
              name="product_price"
              id="product_price"
              className="form-control mb-2"
              value={inputs.product_price || ""}
              onChange={handleChange}
            /> */}
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

export default EditProduct;
