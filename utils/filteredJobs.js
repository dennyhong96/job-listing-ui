const filteredJobs = (allJobs, tags) => {
  if (!tags.length) {
    return allJobs;
  } else {
    return allJobs.filter((job) =>
      tags.some((tag) =>
        `${job.role} ${job.level} ${job.languages.join(" ")} ${job.tools.join(
          " "
        )}`
          .toLowerCase()
          .includes(tag.toLowerCase())
      )
    );
  }
};

export default filteredJobs;
