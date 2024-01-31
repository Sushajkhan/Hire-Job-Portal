import React from "react";
import InputField from "./InputField";

const WorkExperienceFilter = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">Work experience</h4>
      <div>
        <label className="sidebar-label-container text-sm">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any experience
        </label>
        <InputField
          handleChange={handleChange}
          value="fresher"
          name="test"
          title="Fresher"
        />
        <InputField
          handleChange={handleChange}
          value="0-2years"
          name="test"
          title="0-2 Years"
        />
        <InputField
          handleChange={handleChange}
          value="2-5years"
          name="test"
          title="2-5 Years"
        />
        <InputField
          handleChange={handleChange}
          value="5-10years"
          name="test"
          title="5-10 Years"
        />
      </div>
    </div>
  );
};

export default WorkExperienceFilter;
