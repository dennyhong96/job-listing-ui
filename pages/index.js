import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";
import filteredJobs from "../utils/filteredJobs";

export default function Home({ preJobs }) {
  const [jobs, setJobs] = useState(preJobs);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setJobs(filteredJobs(preJobs, tags));
  }, [preJobs, tags, filteredJobs]);

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

      {/* Main */}
      <motion.main
        animate={{ y: tags.length ? "3rem" : "-3rem" }}
        transition={{ duration: 0.5 }}
      >
        {/* Job Filter */}
        <motion.div
          className="w-11/12 mx-auto max-w-screen-lg"
          animate={{ opacity: tags.length ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <JobFilter
            tags={tags}
            onRemoveTag={handleRemoveTag}
            onClearTags={handleClearTags}
          />
        </motion.div>

        {/* Job Cards List */}
        <div className="w-11/12 mx-auto py-12 max-w-screen-lg flex flex-col space-y-10 md:space-y-6">
          <AnimatePresence exitBeforeEnter>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onAddTag={handleAddTag} />
            ))}
          </AnimatePresence>
        </div>
      </motion.main>
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
