import clsx from "clsx";

const JobCard = ({ job, onAddTag }) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-start pt-8 justify-between p-6 bg-white rounded-md shadow-lg md:flex-row md:items-center md:pt-6",
        { ["border-l-5 border-primary"]: job.featured }
      )}
    >
      {/* Left */}
      <div className="flex items-center md:space-x-4">
        {/* Company Logo */}
        <img
          src={job.logo}
          alt={job.company}
          className="absolute top-0 -mt-6 w-12 h-12 md:mt-0 md:static md:block md:w-16 md:h-16"
        />

        {/* Job Information */}
        <div className="flex flex-col space-y-2">
          {/* Company name and if new / featured */}
          <div className="flex items-center">
            <h3 className="mr-4 text-xs font-semibold text-primary">
              {job.company}

              {job.new && (
                <span className="ml-3 mr-2 text-xxs uppercase font-bold text-white bg-primary p-2 rounded-full">
                  New!
                </span>
              )}

              {job.featured && (
                <span className="text-xxs uppercase text-white font-bold bg-dark-cyan-2 p-2 rounded-full">
                  Featured!
                </span>
              )}
            </h3>
          </div>

          {/* Job position */}
          <h2 className="text-gray-900 font-bold cursor-pointer hover:text-primary transition ease-out duration-200">
            {job.position}
          </h2>

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

      <hr className="w-full border-gray-200 my-2 md:hidden" />

      {/* Right - Job meta info */}
      <div className="flex flex-wrap justify-start items-center cursor-pointer space-y-2 md:space-y-0">
        <span
          onClick={onAddTag.bind(this, job.role)}
          className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0 transition ease-out duration-200"
        >
          {job.role}
        </span>
        <span
          onClick={onAddTag.bind(this, job.level)}
          className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0 transition ease-out duration-200"
        >
          {job.level}
        </span>

        {job.languages?.map((lang, idx) => (
          <span
            onClick={onAddTag.bind(this, lang)}
            key={idx}
            className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0 transition ease-out duration-200"
          >
            {lang}
          </span>
        ))}

        {job.tools?.map((tool, idx) => (
          <span
            onClick={onAddTag.bind(this, tool)}
            key={idx}
            className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0 transition ease-out duration-200"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
