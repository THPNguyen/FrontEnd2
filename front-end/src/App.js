import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Users/Home";
import Create from "./pages/Users/Create";
import Edit from "./pages/Users/Edit";
import View from "./pages/Users/View";
import ViewProduct from "./pages/Product/ViewDetailProduct";
import EditProduct from "./pages/Product/EditProduct";
import AllProduct from "./pages/Product/AllProduct";
import AllCategory from "./pages/Category/AllCategory";
import EditCategory from "./pages/Category/EditCategory";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to={"/"} className={"nav-link"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className={"nav-link"}>
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className={"nav-link"}>
                AllProduct
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/categories"} className={"nav-link"}>
                Category
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/view/:id" element={<View />}></Route>

          {/* Product */}
          <Route path="/products" element={<AllProduct />}></Route>
          <Route path="/products/view/:id" element={<ViewProduct />}></Route>
          <Route path="/products/edit/:id" element={<EditProduct />}></Route>

          {/* Category */}
          <Route path="/categories" element={<AllCategory />}></Route>
          <Route path="/categories/edit/:id" element={<EditCategory />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
