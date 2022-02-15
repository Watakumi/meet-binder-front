import Item from './Item';

const SkillForm = () => {
  return (
    <div>
      <label>
        Name: Description
        <div className="grid grid-cols-1 gap-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </label>
    </div>
  );
};
export default SkillForm;
