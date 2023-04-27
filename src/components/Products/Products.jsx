import { useState } from "react";
import { useSelector } from "react-redux";
import { price } from "../../features/filter/filterSlice";

export default function Products() {
  const { products } = useSelector((state) => state.product);
  const { search, content, autoUploadSupport, polygonAmount } = useSelector(
    (state) => state.filter
  );
  const productsPerPage = 12;

  const numPages = Math.ceil(products.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const pageNum = () => {
    for (let i = 0; i < { numPages }; i++) {
      <li className="page-item">
        <a className="page-link" href="#">
          {i}
        </a>
      </li>;
    }
  };

  const createElements = (n) => {
    var elements = [];
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
        return product.price > 10 && product.price < 20;
      case "20-30":
        return product.price > 20 && product.price < 30;
      case "30-40":
        return product.price > 30 && product.price < 40;
      case "40-50":
        return product.price > 40 && product.price < 50;
      default:
        return true;
    }
  };

  const filteredPolygon = (product) => {
    switch (polygonAmount) {
      case "7":
        return product.poligon < 7500;
      case "7-10":
        return product.poligon > 7500 && product.poligon < 10000;
      case "10-15":
        return product.poligon > 10000 && product.poligon < 15000;
      case "15-20":
        return product.poligon > 15000 && product.poligon < 20000;
      case "20-32":
        return product.poligon > 20000 && product.poligon < 32000;
      case "32-70":
        return product.poligon > 32000 && product.poligon < 700000;
      default:
        return true;
    }
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
          <div key={prod.id} className="col-sm-4 col-md-3 box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img alt="product" src={prod.img} />
                </a>
              </div>
              <h6>
                <a href="detail.html">{prod.name}</a>
              </h6>
              <div className="">{createElements(prod.rating)}</div>
              <div className="price">
                <div>${prod.price}</div>
              </div>
              <div>
                {prod.content}
                <p>
                  Auto upload service ready, you can use this avatar within 24
                  hours
                </p>
              </div>
            </div>
          </div>
        ))}
      <div className="d-flex align-items-center justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>

            {pageNum}

            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
