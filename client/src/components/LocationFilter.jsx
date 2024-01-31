import React from "react";
import InputField from "./InputField";

const LocationFilter = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container text-sm">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="kochi"
          name="test"
          title="Kochi"
        />
        <InputField
          handleChange={handleChange}
          value="bangalore"
          name="test"
          title="Bangalore"
        />
        <InputField
          handleChange={handleChange}
          value="trivandrum"
          name="test"
          title="Trivandrum"
        />
        <InputField
          handleChange={handleChange}
          value="elhi"
          name="test"
          title="Delhi"
        />
      </div>
    </div>
  );
};

export default LocationFilter;
