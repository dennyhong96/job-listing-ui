const JobCard = ({ job }) => {
  return (
    <div className="flex items-center justify-between">
      {/* Left */}
      <div className="flex">
        {/* Company Logo */}
        <img src={job.logo} alt={job.company} />

        {/* Job Information */}
        <div className="flex flex-col">
          {/* Company name and if new / featured */}
          <div className="flex">
            <h3>{job.company}</h3>
            {job.new && <span>New!</span>}
            {job.featured && <span>Featured!</span>}
          </div>

          {/* Job position */}
          <h2>{job.position}</h2>

          {/* Job posted at, contract, and location */}
          <div className="flex">
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      {/* Right - Job meta info */}
      <div className="flex">
        <span>{job.role}</span>
        <span>{job.level}</span>
        {job.languages.map((lang, idx) => (
          <span key={idx}>{lang}</span>
        ))}
        {job.tools.map((tool, idx) => (
          <span key={idx}>{tool}</span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
