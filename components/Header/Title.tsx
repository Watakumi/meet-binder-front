import Link from 'next/link';

export const Title = () => {
  return (
    <Link href="/mypage" passHref>
      <a className="inline-block py-4">
        <span className="p-1 text-xl font-black text-gray-900">MeetBinder</span>
      </a>
    </Link>
  );
};
