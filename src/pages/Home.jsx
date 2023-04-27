import FilterMenu from "../components/FilterMenu";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <>
      <div className="row productContainer">
        <div className="col-sm-3">
          <FilterMenu />
        </div>
        <div className="col-sm-9">
          <h3>All items</h3>
          <Products />
        </div>
      </div>
    </>
  );
}
