import { useState } from "react";
import { Form } from "react-bootstrap";
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
  const priceRanges = [
    { label: "Under $10", value: "0-10" },
    { label: "$10 - $20", value: "10-20" },
    { label: "$20 - $30", value: "20-30" },
    { label: "$30 - $40", value: "30-40" },
    { label: "$40 - $50", value: "40-50" },
  ];
  const polygonRanges = [
    { label: "Under △7500", value: "0-7500" },
    { label: "△7,500 to △10,000", value: "7500-10000" },
    { label: "△10,000 to △15,000", value: "10000-15000" },
    { label: "△15,500 to △20,000", value: "15000-20000" },
    { label: "△20,500 to △32,000", value: "20000-32000" },
    { label: "△32,500 to △70,000", value: "32000-70000" },
  ];
  const contentList = [
    { label: "VRChat(Quest)", value: "Quest" },
    { label: "VRChat(PCVR)", value: "PC" },
    { label: "Others", value: "Other" },
  ];
  const autoUploadList = [
    { label: "Supported", value: true },
    { label: "Unsupported", value: false },
  ];

  const handlePriceRangeChange = (event) => {
    let tempFilter = {
      content: filterData.content,
      filter: filterData.filter,
      autoUploadSupport: filterData.autoUploadSupport,
      price: event.target.value,
      polygonAmount: filterData.polygonAmount,
    };
    setFilterData(tempFilter);
    dispatch(price(event.target.value));
  };

  const handleFilterContent = (event) => {
    let tempFilter = {
      content: event.target.value,
      autoUploadSupport: filterData.autoUploadSupport,
      price: filterData.price,
      polygonAmount: filterData.polygonAmount,
    };
    setFilterData(tempFilter);
    dispatch(content(event.target.value));
  };

  const handleFilterAutoUpload = (event) => {
    let tempFilter = {
      content: filterData.content,
      autoUploadSupport: event.target.value,
      price: filterData.price,
      polygonAmount: filterData.polygonAmount,
    };
    setFilterData(tempFilter);
    dispatch(autoUploadSupport(event.target.value));
  };

  const handleFilterPolygonAmount = (event) => {
    let tempFilter = {
      content: filterData.content,
      filter: filterData.filter,
      autoUploadSupport: filterData.autoUploadSupport,
      price: filterData.price,
      polygonAmount: event.target.value,
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
          {contentList.map((range, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={range.label}
              value={range.value}
              checked={range.checked}
              onChange={handleFilterContent}
            />
          ))}
        </div>
      </div>
      <h5>Price</h5>
      <div className="row">
        <div>
          {priceRanges.map((range, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={range.label}
              value={range.value}
              checked={range.checked}
              onChange={handlePriceRangeChange}
            />
          ))}
        </div>
      </div>

      <h5>Polygon amount</h5>
      <div className="row">
        <div>
          {polygonRanges.map((range, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={range.label}
              value={range.value}
              checked={range.checked}
              onChange={handleFilterPolygonAmount}
            />
          ))}
        </div>
      </div>
      <h5>Auto upload support</h5>
      <div className="row">
        <div>
          {autoUploadList.map((range, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={range.label}
              value={range.value}
              checked={range.checked}
              onChange={handleFilterAutoUpload}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
