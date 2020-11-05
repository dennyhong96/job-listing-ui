import { useState } from "react";
import axios from "axios";
import Image from "next/image";

import JobCard from "../components/JobCard";

export default function Home({ preJobs }) {
  const [jobs, setJobs] = useState(preJobs);

  return (
    <div>
      {/* Header */}
      <header>
        <Image
          src="/images/bg-header-desktop.svg"
          alt="Header"
          width={1366}
          height={156}
          className="w-full bg-primary"
        />
      </header>

      {/* Job Cards List */}
      <main className="w-11/12 mx-auto my-16 max-w-screen-lg flex flex-col space-y-10 md:space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
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
