import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";
const Create = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitForm = (event) => {
    http.post("users", inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>New User</h2>
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
            <label htmlFor="passwords">Passwords</label>
            <input
              type="password"
              name="passwords"
              id="passwords"
              className="form-control mb-2"
              value={inputs.passwords || ""}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={submitForm}
              className={"btn btn-primary"}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
