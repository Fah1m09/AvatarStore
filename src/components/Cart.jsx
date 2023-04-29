import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart({ openCart, handleCartPopUp }) {
  const { product, total } = useSelector((state) => state.cart);
  return (
    <>
      <Modal show={openCart} onHide={handleCartPopUp}>
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
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
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
                  <td>${prod.price}</td>
                  <td className="qty">
                    <input
                      type="text"
                      className="form-control"
                      id="input1"
                      value={prod.quantity}
                    />
                  </td>
                  <td>{prod.price * prod.quantity}$</td>
                  <td>
                    <a href="#" className="btn btn-danger btn-sm">
                      <i className="fa fa-times"></i>
                    </a>
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
