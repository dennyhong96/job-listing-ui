const JobFilter = ({ tags, onRemoveTag, onClearTags }) => {
  return (
    <div className="flex justify-between p-6 bg-white rounded-md shadow-lg">
      <div className="flex flex-wrap">
        {tags.length ? (
          tags.map((tag, idx) => (
            <div
              className="flex relative overflow-hidden text-sm font-semibold bg-light-cyan text-primary items-center p-2 rounded-md m-2"
              key={idx}
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
            </div>
          ))
        ) : (
          <p className="text-sm font-semibold text-gray-900">
            No filters applied.
          </p>
        )}
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
