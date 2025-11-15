const BorderedImage = ({ image }) => {
  return (
    <div className="border border-[#111] rounded-[10px] overflow-hidden mb-12 bg-[#D4EEFF]">
      <div className="">
        {image && <img src={image} className="w-auto h-auto max-w-fill" />}
      </div>
    </div>
  );
};

export default BorderedImage;
