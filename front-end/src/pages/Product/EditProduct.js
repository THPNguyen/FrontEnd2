import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
const EditProduct = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [users, setUsers] =useState([]);
  const {id} = useParams();

  useEffect(() =>{
    fetchUser()
  }, [])
  const fetchUser = () =>{
    http.get('/products/' +id+'/edit').then((res)=> {
      setInputs({
        product_name:res.data.product_name,
        product_price:res.data.product_price,
      });
    })
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = (event) => {
    http.put("/products/"+id, inputs).then((res) => {
      navigate("/products");
    });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label htmlFor="product_name">Name</label>
            <input
              type="text"
              name="product_name"
              id="product_name"
              className="form-control mb-2"
              value={inputs.product_name || ""}
              onChange={handleChange}
            />
            <label htmlFor="product_price">Email</label>
            <input
              type="number"
              name="product_price"
              id="product_price"
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

export default EditProduct;
