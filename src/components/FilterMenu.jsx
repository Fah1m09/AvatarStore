import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  autoUploadSupport,
  content,
  polygonAmount,
  price,
} from "../features/filter/filterSlice";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filter);
  const [filterData, setFilterData] = useState(data);

  const handleFilterContent = (event) => {
    let tempFilter = {
      content: event.target.value,
      autoUploadSupport: filterData.autoUploadSupport,
      price: filterData.price,
      poligon: filterData.poligon,
    };
    setFilterData(tempFilter);
    dispatch(content(event.target.value));
  };

  const handleFilterAutoUpload = (event) => {
    let tempFilter = {
      content: filterData.content,
      autoUploadSupport: event.target.value,
      price: filterData.price,
      poligon: filterData.poligon,
    };
    setFilterData(tempFilter);
    dispatch(autoUploadSupport(event.target.value));
  };

  const handleFilterPrice = (event) => {
    let tempFilter = {
      content: filterData.content,
      autoUploadSupport: filterData.autoUploadSupport,
      price: event.target.value,
      poligon: filterData.poligon,
    };
    setFilterData(tempFilter);
    dispatch(price(event.target.value));
  };

  const handleFilterPolygonAmount = (event) => {
    let tempFilter = {
      content: filterData.content,
      autoUploadSupport: filterData.autoUploadSupport,
      price: filterData.price,
      poligonAmount: event.target.value,
    };
    setFilterData(tempFilter);
    dispatch(polygonAmount(event.target.value));
  };

  return (
    <div>
      <h5>Category</h5>
      <div>
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          FullAvatar
        </label>
      </div>
      <div>
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Others
        </label>
      </div>
      <h5>Contents</h5>
      <div className="row">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="Quest"
            checked={filterData.content === "Quest"}
            onChange={handleFilterContent}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            VRChat(Quest)
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="PC"
            checked={filterData.content === "PC"}
            onChange={handleFilterContent}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            VRChat(PCVR)
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="Other"
            checked={filterData.content === "Other"}
            onChange={handleFilterContent}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Others
          </label>
        </div>
      </div>
      <h5>Price</h5>
      <div className="row">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="10"
            checked={filterData.price === "10"}
            onChange={handleFilterPrice}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Under $10
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="10-20"
            checked={filterData.price === "10-20"}
            onChange={handleFilterPrice}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $10 to $20
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="20-30"
            checked={filterData.price === "20-30"}
            onChange={handleFilterPrice}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $20 to $30
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="30-40"
            checked={filterData.price === "30-40"}
            onChange={handleFilterPrice}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $30 to $40
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="40-50"
            checked={filterData.price === "40-50"}
            onChange={handleFilterPrice}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $40 to $50
          </label>
        </div>
      </div>

      <h5>Polygon amount</h5>
      <div className="row">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="7"
            checked={filterData.poligonAmount === "7"}
            onChange={handleFilterContent}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Under 🛆7,500
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="7-10"
            checked={filterData.poligonAmount === "7-10"}
            onChange={handleFilterPolygonAmount}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆7,500 - 🛆10,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="10-15"
            checked={filterData.poligonAmount === "10-15"}
            onChange={handleFilterPolygonAmount}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆10,000 - 🛆15,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="15-20"
            checked={filterData.poligonAmount === "15-20"}
            onChange={handleFilterPolygonAmount}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆15,000 - 🛆20,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="20-32"
            checked={filterData.poligonAmount === "20-32"}
            onChange={handleFilterPolygonAmount}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆20,000 - 🛆32,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="32-70"
            checked={filterData.poligonAmount === "32-70"}
            onChange={handleFilterPolygonAmount}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆32,000 - 🛆70,000
          </label>
        </div>
      </div>
      <h5>Auto upload support</h5>
      <div className="row">
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="Supported"
            checked={filterData.autoUploadSupport === "Supported"}
            onChange={handleFilterAutoUpload}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Supported
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value="Unsupported"
            checked={filterData.autoUploadSupport === "Unsupported"}
            onChange={handleFilterAutoUpload}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Unsupported
          </label>
        </div>
      </div>
    </div>
  );
}
