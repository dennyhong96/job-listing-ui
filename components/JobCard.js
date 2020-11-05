const JobCard = ({ job }) => {
  return (
    <div className="flex w-9/12 items-center justify-between p-6 bg-white mb-4 rounded-lg shadow-lg">
      {/* Left */}
      <div className="flex items-center space-x-4">
        {/* Company Logo */}
        <img src={job.logo} alt={job.company} className="block w-16 h-16" />

        {/* Job Information */}
        <div className="flex flex-col space-y-2">
          {/* Company name and if new / featured */}
          <div className="flex items-center">
            <h3 className="mr-4 text-xs font-semibold text-primary">
              {job.company}
              {job.new && (
                <span className="ml-3 mr-2 text-xxs uppercase text-white bg-primary p-2 rounded-full">
                  New!
                </span>
              )}
              {job.featured && (
                <span className="text-xxs uppercase text-white bg-dark-cyan-2 p-2 rounded-full">
                  Featured!
                </span>
              )}
            </h3>
          </div>

          {/* Job position */}
          <h2 className="text-gray-900 font-semibold">{job.position}</h2>

          {/* Job posted at, contract, and location */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 text-xs font-medium">
              {job.contract}
            </span>
            <span className="text-gray-500 text-xs font-medium">•</span>
            <span className="text-gray-500 text-xs font-medium">
              {job.postedAt}
            </span>
            <span className="text-gray-500 text-xs font-medium">•</span>
            <span className="text-gray-500 text-xs font-medium">
              {job.location}
            </span>
          </div>
        </div>
      </div>

      {/* Right - Job meta info */}
      <div className="flex items-center space-x-4">
        <span className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded">
          {job.role}
        </span>
        <span className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded">
          {job.level}
        </span>
        {job.languages.map((lang, idx) => (
          <span
            key={idx}
            className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded"
          >
            {lang}
          </span>
        ))}
        {job.tools.map((tool, idx) => (
          <span
            key={idx}
            className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
