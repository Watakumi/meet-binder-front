const EmailForm = () => {
  return (
    <form>
      <label>
        Email:
        <input
          type="email"
          className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-transparent
                    bg-gray-100
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
          placeholder="sample@meetbinder.com"
        />
      </label>
    </form>
  );
};
export default EmailForm;
