import Image from 'next/image';

type Props = {
  name: string;
  company: string;
  bio: string;
};

export const About: React.FC<Props> = ({ name, company, bio }) => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold">{name}</p>
        <p className="mt-1 text-lg font-medium text-gray-800">{company}</p>
        <p className="mt-4 text-gray-600">{bio}</p>
      </div>
      <div>
        <Image
          src="https://picsum.photos/200"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};
