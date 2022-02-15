import { Header } from '../../components/Header/Header';
import {
  TextForm,
  EmailForm,
  Textarea,
  SkillForm,
  ProjectForm,
} from '../../components/Settings';

const UserSettings: React.FunctionComponent = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <div className="my-8 grid grid-cols-1 gap-6 px-3 font-sen">
        <TextForm name="Name" />
        <EmailForm />
        <TextForm name="Company" />
        <Textarea labelName="Bio" />
        <p className="text-2xl">Skills</p>
        <SkillForm />
        <p className="text-2xl">Projects</p>
        <ProjectForm />
      </div>
    </div>
  );
};

export default UserSettings;
