type Props = {
  description: string;
};
export const ProjectDetail: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};
