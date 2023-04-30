import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { price, search, content, autoUploadSupport, polygonAmount } =
    useSelector((state) => state.filter);
  const productsPerPage = 12;

  const numPages = Math.ceil(products.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const pageNum = () => {
    let elements = [];
    for (let i = 1; i <= numPages; i++) {
      elements.push(
        <h5 className="pagination-text" onClick={() => setCurrentPage(i - 1)}>
          {i}
        </h5>
      );
    }
    return elements;
  };

  const createElements = (n) => {
    let elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="orange"
          className="bi bi-star-fill "
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      );
    }
    return elements;
  };

  const filteredContent = (product) => {
    switch (content) {
      case "Quest":
        return product.content === "Quest";
      case "PC":
        return product.content === "PC";
      case "Other":
        return product.content == "Other";
      default:
        return true;
    }
  };

  const filteredAutoUpload = (product) => {
    switch (autoUploadSupport) {
      case "Supported":
        return product.autoUpload === true;
      case "Unsupported":
        return product.autoUpload === false;
      default:
        return true;
    }
  };

  const filteredPrice = (product) => {
    switch (price) {
      case "10":
        return product.price < 10;
      case "10-20":
        return product.price >= 10 && product.price <= 20;
      case "20-30":
        return product.price >= 20 && product.price <= 30;
      case "30-40":
        return product.price >= 30 && product.price <= 40;
      case "40-50":
        return product.price >= 40 && product.price <= 50;
      default:
        return true;
    }
  };

  const filteredPolygon = (product) => {
    switch (polygonAmount) {
      case "7":
        return product.polygon < 7500;
      case "7-10":
        return product.polygon > 7500 && product.polygon < 10000;
      case "10-15":
        return product.polygon > 10000 && product.polygon < 15000;
      case "15-20":
        return product.polygon > 15000 && product.polygon < 20000;
      case "20-32":
        return product.polygon > 20000 && product.polygon < 32000;
      case "32-70":
        return product.polygon > 32000 && product.polygon < 700000;
      default:
        return true;
    }
  };

  const handleAddToCart = (e, prod) => {
    e.preventDefault();
    let data = {
      id: prod.id,
      img: prod.img,
      name: prod.name,
      rating: prod.rating,
      likes: prod.likes,
      price: prod.price,
      gender: prod.gender,
      polygon: prod.polygon,
      content: prod.content,
      quantity: 1,
    };
    dispatch(addToCart(data));
  };

  return (
    <div className="row">
      {currentProducts
        .filter((product) =>
          search !== ""
            ? product.name.toLowerCase().includes(search.toLowerCase())
            : currentProducts
        )
        .filter((product) => filteredContent(product))
        .filter((product) => filteredPrice(product))
        .filter((product) => filteredPolygon(product))
        .filter((product) => filteredAutoUpload(product))
        .map((prod) => (
          <div key={prod.id} className="col-sm-3 box-product-outer">
            <div className="box-product">
              <div className="img-wrapper position-relative">
                <Link to={`/product/${prod.id}`}>
                  <img alt="product" src={prod.img} />
                  <button
                    onClick={(e) => handleAddToCart(e, prod)}
                    className="btn btn-primary position-absolute top-0 end-0 m-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    Add
                  </button>
                </Link>
              </div>
              <div className="box-product-details">
                <h6>
                  <Link to={`/product/${prod.id}`} className="product_title">
                    {prod.name}
                  </Link>
                </h6>
                <div className="d-flex justify-content-between">
                  <div>
                    {createElements(prod.rating)} {prod.rating} & {prod.likes}
                    Likes
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="red"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </div>
                </div>

                <p className="box-product-price">${prod.price}</p>

                <div>
                  <div className="d-flex align-items-center">
                    <div
                      className={`ball rounded-circle ${
                        prod.content === "PC" ? "blue-ball" : "green-ball"
                      }`}
                    ></div>
                    {prod.content} Only
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    {prod.autoUpload && (
                      <p className="box-auto-upload">
                        Auto upload service ready, you can use this avatar
                        within 24 hours
                      </p>
                    )}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-box-arrow-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="d-flex align-items-center justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            {pageNum()}

            <li
              className="page-item"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <a className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
