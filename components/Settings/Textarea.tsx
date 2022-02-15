const Textarea = ({ labelName }: { labelName: string }) => {
  return (
    <form>
      <label>
        {labelName}:
        <textarea
          className="
            mt-1
            block
            w-full
            rounded-md
            border-transparent
            bg-gray-100
            focus:border-gray-500 focus:bg-white focus:ring-0
          "
        />
      </label>
    </form>
  );
};
export default Textarea;
