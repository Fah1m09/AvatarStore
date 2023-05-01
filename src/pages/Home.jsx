import { useState } from "react";
import { useDispatch } from "react-redux";
import FilterMenu from "../components/FilterMenu";
import Products from "../components/Products/Products";
import { sortByFilter } from "../features/filter/filterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState({});
  const handleFilter = (event) => {
    let tempFilter = {
      sortByFilter: event.target.value,
    };
    setFilterData(tempFilter);
    dispatch(sortByFilter(event.target.value));
  };
  return (
    <>
      <div className="row productContainer">
        <div className="col-sm-3">
          <FilterMenu />
        </div>
        <div className="col-sm-9">
          <div className="d-flex justify-content-between">
            <h3>All items</h3>
            <select
              className="form-select w-25"
              aria-label="Sort by featured"
              value={filterData.sortByFilter}
              onChange={(e) => handleFilter(e)}
            >
              <option value="">Sort by featured</option>
              <option value="priceLow2High">Price Low to High</option>
              <option value="priceHigh2Low">Price High to Low</option>
              <option value="review">Customer Review</option>
              <option value="new">New</option>
              <option value="polHigh2Low">Polygon: Low to High</option>
              <option value="polLow2High">Polygon: High to Low</option>
            </select>
          </div>

          <Products />
        </div>
      </div>
    </>
  );
}
