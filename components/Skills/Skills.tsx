import { Item } from './Item';

type Skill = {
  id: number;
  name: string;
  description: string;
};
const Skills: React.FC<{ skills: Skill[]; interests: Skill[] }> = ({
  skills,
  interests,
}) => {
  return (
    <div className="my-16 px-3 font-sen" id="skills">
      <p className="text-3xl font-bold">Skills</p>

      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        {skills.map((skill) => (
          <Item
            key={skill.id}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>

      <p className="text-2xl">Interest</p>
      <div className="text-md custom:text-lg my-2 flex flex-col font-medium md:text-xl">
        {interests.map((interest) => (
          <Item
            key={interest.id}
            name={interest.name}
            description={interest.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
