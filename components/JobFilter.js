import { AnimatePresence, motion } from "framer-motion";

import { fadeVariants } from "../motion/variants";

const JobFilter = ({ tags, onRemoveTag, onClearTags }) => {
  return (
    <div className="flex justify-between p-6 bg-white rounded-md shadow-lg">
      <div className="flex flex-wrap">
        <AnimatePresence>
          {tags?.map((tag, idx) => (
            <motion.div
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex relative overflow-hidden text-sm font-semibold bg-light-cyan text-primary items-center p-2 rounded-md m-2"
              key={`${tag}-${idx}`}
            >
              <span className="mr-8">{tag}</span>
              <div
                onClick={onRemoveTag.bind(this, tag)}
                className="flex items-center justify-center absolute cursor-pointer top-0 bottom-0 right-0 w-8 bg-primary hover:bg-dark-cyan-2 transition ease-out duration-200"
              >
                <img
                  src="/images/icon-remove.svg"
                  alt="Remove"
                  className="block w-4 h-4"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Clear button */}
      <button
        onClick={onClearTags}
        className="text-sm font-bold text-primary underline hover:text-dark-cyan-2 transition ease-out duration-200"
      >
        Clear
      </button>
    </div>
  );
};

export default JobFilter;
