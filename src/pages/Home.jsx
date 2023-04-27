import FilterMenu from "../components/FilterMenu";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-sm-4">
            <FilterMenu />
          </div>
          <div className="col-sm-8">
            <h3>All items</h3>
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}
