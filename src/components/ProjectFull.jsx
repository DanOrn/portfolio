const ProjectFull = ({ image }) => {
  return (
    <div className="w-full lg:p-18 p-4 mb-12 flex justify-center object-cover box-border overflow-hidden border border-[#111]    bg-[#D4EEFF] dark:border-neutral-700">
      <div className="">
        {image && (
          <img
            src={image}
            className="w-auto h-auto max-w-fill lg:max-w-[600px]"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectFull;
