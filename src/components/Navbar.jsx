import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../public/logo_avatown_manual_1_basi_inverse.png";
import { setSearch } from "../features/filter/filterSlice";
import Cart from "./Cart";

export default function Navbar() {
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);
  const { items } = useSelector((state) => state.cart);

  const handleCartPopUp = () => {
    setOpenCart(!openCart);
  };

  return (
    <nav className="navbar bg-gradient-purple">
      <div className="container-fluid">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="logo" width="170" height="40" />
          </Link>

          <Link className="nav-go-2-market" to={"/"}>
            Go to Marketpage
          </Link>
        </div>

        <a className="text-dark icon-link" href="#">
          <form className="d-flex w-100" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
          </form>
          <div
            style={{
              position: "relative",
              backgroundColor: "black",
              padding: "6px",
              borderRadius: "30%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="white"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <span
              className="badge badge-pill badge-danger"
              style={{ position: "absolute", top: "-5px", right: "-5px" }}
            >
              {items}
            </span>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "black",
              padding: "6px",
              borderRadius: "30%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="bi bi-cart"
              viewBox="0 0 16 16"
              onClick={() => handleCartPopUp()}
            >
              <path
                color="red"
                fill="white"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <span
              className="badge badge-pill badge-danger"
              style={{ position: "absolute", top: "-5px", right: "-5px" }}
            >
              {items}
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            color="white"
            fill="danger"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </a>
      </div>
      {openCart && (
        <Cart openCart={openCart} handleCartPopUp={handleCartPopUp} />
      )}
    </nav>
  );
}
