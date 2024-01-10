import React from "react";
import Button from "./Button";
import InputField from "./InputField";

const SalaryFilter = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button
          onClickHandler={handleClick}
          value="Monthly"
          title="Monthly"
        />{" "}
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
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
          value={50}
          name="test"
          title="< 50K"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          name="test"
          title="< 80K"
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
