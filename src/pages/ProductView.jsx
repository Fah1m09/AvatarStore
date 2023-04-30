import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductView() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);
  const [currentProduct, setCurrentProduct] = useState({});

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

  useEffect(() => {
    setCurrentProduct(products.find((x) => x.id === parseInt(id)));
  }, [id, products]);
  return (
    <>
      {currentProduct && (
        //  <!-- Product Image -->
        <div>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={currentProduct?.img}
                  alt="Product Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h1>{currentProduct?.name}</h1>
                <h2>${currentProduct?.price}</h2>
                <div className="d-flex align-items-center">
                  {createElements(currentProduct.rating)}
                  {currentProduct.rating}
                </div>

                <h5>{currentProduct?.likes} Likes</h5>
                <button type="button" className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product Details --> */}
          <div className="container my-5">
            <h3>Product Details</h3>
            <ul className="list-group">
              <li className="list-group-item">
                Gender: {currentProduct?.gender}
              </li>
              <li className="list-group-item">
                Polygon Count : {currentProduct?.polygon}
              </li>
              <li className="d-flex align-items-center list-group-item">
                Content:
                <div
                  className={`ball rounded-circle m-2 ${
                    currentProduct.content === "PC" ? "blue-ball" : "green-ball"
                  }`}
                ></div>
                {currentProduct.content} Only
              </li>
              <li className="list-group-item">
                {currentProduct.autoUpload &&
                  " Auto upload service ready, you can use this avatar within 24 hours"}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
