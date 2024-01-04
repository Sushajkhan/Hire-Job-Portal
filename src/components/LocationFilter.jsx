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
          value="london"
          name="test"
          title="London"
        />
        <InputField
          handleChange={handleChange}
          value="boston"
          name="test"
          title="Boston"
        />
        <InputField
          handleChange={handleChange}
          value="seattle"
          name="test"
          title="Seattle"
        />
        <InputField
          handleChange={handleChange}
          value="madrid"
          name="test"
          title="Madrid"
        />
      </div>
    </div>
  );
};

export default LocationFilter;
