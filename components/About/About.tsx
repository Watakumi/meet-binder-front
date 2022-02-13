import Image from 'next/image';
export const About = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold">Watakumi</p>
        <p className="mt-1 text-lg font-medium text-gray-800">
          SigntVisit Inc.
        </p>
        <p className="mt-4 text-gray-600">This is a test description.</p>
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
