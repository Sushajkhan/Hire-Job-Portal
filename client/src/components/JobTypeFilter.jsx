import React from "react";
import InputField from "./InputField";

const JobTypeFilter = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">Job type</h4>
      <div>
        <label className="sidebar-label-container text-sm">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any
        </label>
        <InputField
          handleChange={handleChange}
          value="full-time"
          name="test"
          title="Full-time"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          name="test"
          title="Part-time"
        />
        <InputField
          handleChange={handleChange}
          value="temporary"
          name="test"
          title="Temporary"
        />
      </div>
    </div>
  );
};

export default JobTypeFilter;
