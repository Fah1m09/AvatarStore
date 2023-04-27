import { useSelector } from "react-redux";

export default function Products() {
  const { products } = useSelector((state) => state.product);
  const { content } = useSelector((state) => state.filter);

  const filtered = (product) => {
    switch (content) {
      case "Quest":
        return product.content === "Quest";
      case "PCVR":
        return product.content === "PC";
      default:
        return true;
    }
  };

  return (
    <div className="row">
      {products
        .filter((product) => filtered(product))
        .map((prod) => (
          <div key={prod.id} className="col-sm-4">
            <div className="card">
              <img
                src={prod.img}
                className="card-img-top"
                alt="product image"
              />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p>
                  {prod.rating} & {prod.likes}Likes
                </p>
                <p>$ {prod.price}</p>
                {prod.autoUpload && (
                  <p>
                    Auto upload service ready, you can use this avatar within 24
                    hours
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
