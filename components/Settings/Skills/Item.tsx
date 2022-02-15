const Item = () => {
  return (
    <div className="mt-1 flex flex-row items-center justify-start gap-4">
      <input
        type="text"
        className="
          rounded-md
          border-transparent
          bg-gray-100
          focus:border-gray-500 focus:bg-white focus:ring-0
        "
      />
      <span>:</span>
      <input
        type="text"
        className="
        w-full
        rounded-md
        border-transparent
        bg-gray-100
        focus:border-gray-500 focus:bg-white focus:ring-0
      "
      />
    </div>
  );
};
export default Item;
