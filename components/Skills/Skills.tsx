import { Item } from './Item';

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen" id="skills">
      <p className="text-3xl font-bold">Skills & Uses</p>

      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <Item name="NestJS" />
        <Item name="TypeScript" />
      </div>

      <p className="text-2xl">Interest</p>
      <div className="text-md custom:text-lg my-2 flex flex-col font-medium md:text-xl">
        <Item name="NestJS" />
        <Item name="TypeScript" />
      </div>
    </div>
  );
};

export default Skills;
