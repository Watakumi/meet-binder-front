type Props = {
  description: string;
  onClick: any;
};
export const ProjectDetail: React.FC<Props> = ({ description, onClick }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-x-4">
      <p>{description}</p>
      <a className="cursor-pointer" onClick={onClick}>
        閉じる
      </a>
    </div>
  );
};
