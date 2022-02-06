import React from 'react';
import { useForm } from 'react-hook-form';

type ProfilePrams = {
  githubUrl: string;
  twitterId: string;
  description: string;
};

const New: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: ProfilePrams) => alert(JSON.stringify(data));

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue="githubUrl"
        {...register('githubUrl', { required: true })}
      />
      {errors.githubUrl && <span>This field is required</span>}
      <input
        defaultValue="twitterId"
        {...register('twitterId', { required: true })}
      />
      {errors.twitterId && <span>This field is required</span>}
      <textarea
        defaultValue="description"
        {...register('description', { required: true })}
      />
      {errors.description && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default New;
