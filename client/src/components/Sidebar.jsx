import LocationFilter from "./LocationFilter";
import SalaryFilter from "./SalaryFilter";
import PostingDateFilter from "./PostingDateFilter";
import WorkExperienceFilter from "./WorkExperienceFilter";
import JobTypeFilter from "./JobTypeFilter";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>

      <LocationFilter handleChange={handleChange} />
      <SalaryFilter handleChange={handleChange} handleClick={handleClick} />
      <PostingDateFilter handleChange={handleChange} />
      <WorkExperienceFilter handleChange={handleChange} />
      <JobTypeFilter handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
