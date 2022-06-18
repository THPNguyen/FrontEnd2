import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../http";
const Edit = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [users, setUsers] =useState([]);
  const {id} = useParams();

  useEffect(() =>{
    fetchUser()
  }, [])
  const fetchUser = () =>{
    http.get('/users/' +id+'/edit').then((res)=> {
      setInputs({
        name:res.data.name,
        email:res.data.email,
      });
    })
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = (event) => {
    http.put("/users/"+id, inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control mb-2"
              value={inputs.name || ""}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control mb-2"
              value={inputs.email || ""}
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

export default Edit;
