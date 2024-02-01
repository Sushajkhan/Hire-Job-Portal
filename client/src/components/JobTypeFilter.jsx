import InputField from "./InputField";

const JobTypeFilter = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">Job type</h4>
      <div>
        <label className="sidebar-label-container text-sm">
          <input
            type="radio"
            name="jobTypeFilter"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any
        </label>
        <InputField
          handleChange={handleChange}
          value="Intern"
          name="jobTypeFilter"
          title="Intern"
        />
        <InputField
          handleChange={handleChange}
          value="Remote"
          name="jobTypeFilter"
          title="Remote"
        />
        <InputField
          handleChange={handleChange}
          value="Part-time"
          name="jobTypeFilter"
          title="Part-time"
        />
        <InputField
          handleChange={handleChange}
          value="Full-Time"
          name="jobTypeFilter"
          title="Full-Time"
        />
      </div>
    </div>
  );
};

export default JobTypeFilter;
