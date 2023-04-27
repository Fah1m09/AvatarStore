import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { content } from "../features/filter/filterSlice";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.filter);
  const [filterData, setFilterData] = useState(data);

  const handleFilter = (event) => {
    let tempFilter = {
      sort: filterData.sort,
      filter: event.target.value,
    };
    setFilterData(tempFilter);
    dispatch(content(event.target.value));
  };

  return (
    <div>
      <h5>Category</h5>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          FullAvatar
        </label>
      </div>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked
        />
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
            checked={filterData.filter === "Quest"}
            onChange={handleFilter}
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
            checked={filterData.filter === "PC"}
            onChange={handleFilter}
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
            checked={filterData.filter === "Other"}
            onChange={handleFilter}
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
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Under $10
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $10 to $20
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $20 to $30
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            $30 to $40
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
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
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Under 🛆7,500
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆7,500 - 🛆10,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆10,000 - 🛆15,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆15,000 - 🛆20,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            🛆20,000 - 🛆32,000
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
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
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Supported
          </label>
        </div>
        <div>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Unsupported
          </label>
        </div>
      </div>
    </div>
  );
}
