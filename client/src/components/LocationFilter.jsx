import InputField from "./InputField";

const LocationFilter = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-sm font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container text-sm">
          <input
            type="radio"
            name="locationFilter"
            id="locationFilter"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="kochi"
          name="locationFilter"
          title="Kochi"
        />
        <InputField
          handleChange={handleChange}
          value="bangalore"
          name="locationFilter"
          title="Bangalore"
        />
        <InputField
          handleChange={handleChange}
          value="trivandrum"
          name="locationFilter"
          title="Trivandrum"
        />
        <InputField
          handleChange={handleChange}
          value="Delhi"
          name="locationFilter"
          title="Delhi"
        />
      </div>
    </div>
  );
};

export default LocationFilter;
