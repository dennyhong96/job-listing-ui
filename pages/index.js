import { useState } from "react";
import axios from "axios";

import JobCard from "../components/JobCard";

export default function Home({ preJobs }) {
  const [jobs, setJobs] = useState(preJobs);

  return (
    <div className="">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  let preJobs = [];

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/jobs`);
    preJobs = res.data.jobs;
  } catch (error) {
    console.error(error);
  }

  return {
    props: { preJobs },
    revalidate: 1,
  };
};
