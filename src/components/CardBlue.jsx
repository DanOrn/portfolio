const CardBlue = ({ items = [] }) => {
  return (
    <div className="w-full lg:max-w-[340px] bg-[#c5ebff] border border-[#111] rounded-[10px] overflow-hidden flex flex-col gap-4 shrink-0 pb-8 ">
      <div className="p-5  border-b-1 bg-[#92d9ff]"></div>
      {items.map((item, i) => (
        <div key={i} className="font-normal px-4">
          <h2 className="text-[0.9rem]/6 text-zinc-500 ">{item.title}</h2>
          <p className="text-[0.9rem]/6  text-[#2f2f2f] zinc-500 whitespace-pre-line">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardBlue;
