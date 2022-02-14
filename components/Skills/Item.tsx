type Props = {
  name: string;
  description: string;
};

export const Item: React.FC<Props> = ({ name, description }) => {
  return (
    <p className="flex flex-row items-center py-1 text-gray-600">
      <span className="border-b-[0.1px] border-gray-500 text-black">
        {name}
      </span>
      &nbsp;{description}
    </p>
  );
};
