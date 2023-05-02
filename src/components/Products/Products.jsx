import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { likeDislike } from "../../features/product/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const { products, users } = useSelector((state) => state.product);
  const { product } = useSelector((state) => state.cart);
  const { price, search, content, sort, autoUploadSupport, polygonAmount } =
    useSelector((state) => state.filter);
  const numPages = Math.ceil(products.length / productsPerPage);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    setCurrentProducts(products.slice(startIndex, endIndex));
  }, [products, startIndex, endIndex]);

  const copyProductLink = (link) => {
    navigator.clipboard.writeText(`http://127.0.0.1:5173/product/${link}`);
    alert("Product link copied");
  };

  const pageNum = () => {
    let elements = [];
    for (let i = 1; i <= numPages; i++) {
      elements.push(
        <h5
          className={`${
            currentPage + 1 === i && "footer-active-page"
          } pointer me-2`}
          onClick={() => setCurrentPage(i - 1)}
        >
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

  const filteredSortBy = (a, b) => {
    switch (sort) {
      case "priceLow2High":
        return parseFloat(a.price) - parseFloat(b.price);
      case "priceHigh2Low":
        return parseFloat(b.price) - parseFloat(a.price);
      case "polHigh2Low":
        return parseFloat(a.polygon) - parseFloat(b.polygon);
      case "polLow2High":
        return parseFloat(b.polygon) - parseFloat(a.polygon);
      case "review":
        return parseFloat(b.rating) - parseFloat(a.rating);
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
        .filter((product) => {
          const isInPriceRange =
            price.length > 0
              ? price.some(
                  (range) =>
                    product.price > Number(range.split("-")[0]) &&
                    product.price <= Number(range.split("-")[1])
                )
              : true;

          const isInPolyRange =
            polygonAmount.length > 0
              ? polygonAmount.some(
                  (range) =>
                    product.polygon > Number(range.split("-")[0]) &&
                    product.polygon <= Number(range.split("-")[1])
                )
              : true;

          const isInContent =
            content.length > 0
              ? content.some((x) => product.content == x)
              : true;

          const isSupported =
            autoUploadSupport.length > 0
              ? autoUploadSupport.some(
                  (x) => product.autoUpload === JSON.parse(x)
                )
              : true;

          return isInPriceRange && isInPolyRange && isInContent && isSupported;
        })
        .sort((a, b) => filteredSortBy(a, b))
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
                    {product.find((x) => x.id === prod.id) ? "Added" : "Add"}
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
                  <div onClick={() => dispatch(likeDislike(prod.id))}>
                    {prod.isLiked === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill={`${prod.isLiked === true ? "red" : "black"}`}
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  {users
                    .filter((x) => x.id === prod.createdBy)
                    .map((x) => (
                      <div key={x.id}>
                        <img
                          className="box-product-user"
                          src={x.img}
                          alt="userImage"
                        />
                        <span>{x.userName}</span>
                      </div>
                    ))}
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
                      onClick={() => copyProductLink(prod.id)}
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
          <ul className="pagination p-5 ">
            <li onClick={() => setCurrentPage(currentPage - 1)}>
              <a className="pointer me-2" aria-label="Previous">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </a>
            </li>

            {pageNum()}

            <li onClick={() => setCurrentPage(currentPage + 1)}>
              <a className="pointer" aria-label="Next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
