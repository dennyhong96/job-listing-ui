import { useState } from "react";
import clsx from "clsx";
import axios from "axios";

import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";

export default function Home({ preJobs }) {
  const [jobs, setJobs] = useState(preJobs);
  const [tags, setTags] = useState([]);

  const handleAddTag = (tag) => {
    setTags((prev) => Array.from(new Set([...prev, tag])));
  };

  const handleRemoveTag = (tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleClearTags = () => {
    setTags([]);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <img
          src="/images/bg-header-desktop.svg"
          alt="Header"
          className="w-full bg-primary"
        />
      </header>

      <main className="-mt-12 relative z-10">
        {/* Job Filter */}
        {!!tags.length && (
          <div className="w-11/12 mx-auto max-w-screen-lg ">
            <JobFilter
              tags={tags}
              onRemoveTag={handleRemoveTag}
              onClearTags={handleClearTags}
            />
          </div>
        )}

        {/* Job Cards List */}
        <div
          className={clsx(
            "w-11/12 mx-auto py-12 max-w-screen-lg flex flex-col space-y-10 md:space-y-6",
            { ["pt-24"]: !tags.length }
          )}
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onAddTag={handleAddTag} />
          ))}
        </div>
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
