import React from "react";
import Button from "./Button";
import InputField from "./InputField";

const SalaryFilter = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>

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
          value={20}
          name="test"
          title="< 20K"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          name="test"
          title="< 40K"
        />{" "}
        <InputField
          handleChange={handleChange}
          value={100}
          name="test"
          title="< 100K"
        />
      </div>
    </div>
  );
};

export default SalaryFilter;
