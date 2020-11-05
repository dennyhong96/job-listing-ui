import clsx from "clsx";

const JobCard = ({ job }) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col mb-10 mx-10 items-start pt-8 md:flex-row md:items-center justify-between p-6 md:pt-6 bg-white md:mb-4 rounded-md shadow-lg",
        { ["border-l-4 border-primary"]: job.featured }
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
          <h2 className="text-gray-900 font-bold cursor-pointer hover:text-primary">
            {job.position}
          </h2>

          {/* Job posted at, contract, and location */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-xs font-medium">
              {job.contract}
            </span>
            <span className="text-gray-600 text-xs font-medium">•</span>
            <span className="text-gray-600 text-xs font-medium">
              {job.postedAt}
            </span>
            <span className="text-gray-600 text-xs font-medium">•</span>
            <span className="text-gray-600 text-xs font-medium">
              {job.location}
            </span>
          </div>
        </div>
      </div>

      <hr className="md:hidden w-full bg-gray-200 my-2" />

      {/* Right - Job meta info */}
      <div className="flex flex-wrap justify-start items-center cursor-pointer space-y-2">
        <span className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0">
          {job.role}
        </span>
        <span className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0">
          {job.level}
        </span>

        {job.languages?.map((lang, idx) => (
          <span
            key={idx}
            className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0"
          >
            {lang}
          </span>
        ))}

        {job.tools?.map((tool, idx) => (
          <span
            key={idx}
            className="text-xs font-semibold p-2 bg-light-cyan text-primary rounded hover:bg-primary hover:text-white mr-2 last:mr-0"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
