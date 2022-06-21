import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../http";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategory();
  }, []);

  const fetchAllCategory = () => {
    http.get("/categories").then((res) => {
      setCategories(res.data);
    });
  };
  const deleteCategory = (id) => {
    http.delete("/categories/" + id).then((res) => {
      fetchAllCategory();
    });
  };
  return (
    <div>
      <h2>Users listing ....</h2>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Acion</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categories, index) => (
            <tr key={categories.id}>
              <td>{++index}</td>
              <td>{categories.category_name}</td>
              <td>
                <Link
                  className="btn btn-warning"
                  to={{ pathname: "/categories/edit/" + categories.id }}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteCategory(categories.id);
                  }}
                >
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

export default AllCategory;
