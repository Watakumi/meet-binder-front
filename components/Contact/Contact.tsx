import GithubLink from '../GithubLink';
import TwitterLink from '../TwitterLink';
export const Contact: React.FC = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold">Contact</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <GithubLink />
        <TwitterLink />
      </div>
    </div>
  );
};
