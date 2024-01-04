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
          value="Internship"
          name="test"
          title="Internship"
        />
        <InputField
          handleChange={handleChange}
          value="work remotely"
          name="test"
          title="Work remotely"
        />
      </div>
    </div>
  );
};

export default WorkExperienceFilter;
