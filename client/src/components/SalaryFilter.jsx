import InputField from "./InputField";

const SalaryFilter = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>

      <div>
        <label className="sidebar-label-container text-sm">
          <input
            type="radio"
            name="salaryFilter"
            id="salaryFilter"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={30000}
          name="salaryFilter"
          title="< 30K"
        />
        <InputField
          handleChange={handleChange}
          value={80000}
          name="salaryFilter"
          title="< 80K"
        />{" "}
        <InputField
          handleChange={handleChange}
          value={100000}
          name="salaryFilter"
          title="< 100K"
        />
      </div>
    </div>
  );
};

export default SalaryFilter;
