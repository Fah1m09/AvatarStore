import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function Cart({ openCart, handleCartPopUp }) {
  const dispatch = useDispatch();
  const { product, total } = useSelector((state) => state.cart);
  return (
    <>
      <Modal size="lg" show={openCart} onHide={handleCartPopUp}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-image">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {product.map((prod) => (
              <tbody key={prod.id}>
                <tr>
                  <td className="w-25">
                    <img
                      src={prod.img}
                      className="img-fluid img-thumbnail"
                      alt="Sheep"
                    />
                  </td>
                  <td>{prod.name}</td>
                  <td>{prod.price}$</td>
                  <td>
                    <svg
                      onClick={() => dispatch(removeFromCart(prod.id))}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="red"
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                      />
                      <path
                        fill="red"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </Modal.Body>
        <Modal.Footer>
          <h3>Total: {total}</h3>
          <Button variant="secondary" onClick={handleCartPopUp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
