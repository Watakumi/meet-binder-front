import { Header } from '../../components/Header/Header';
import { EmailForm } from '../../components/Settings/EmailForm';

const UserSettings: React.FunctionComponent = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <div className="my-8 px-3 font-sen">
        <EmailForm />
      </div>
    </div>
  );
};

export default UserSettings;
