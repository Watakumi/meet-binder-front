type Props = {
  name: string;
};

export const Item: React.FC<Props> = ({ name }) => {
  return (
    <p className="flex flex-row items-center py-1 text-gray-600">
      <span className="border-b-[0.1px] border-gray-500 text-black">
        {name}
      </span>
      &nbsp;実務経験あり。3年ほど開発していた。
    </p>
  );
};
