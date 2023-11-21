import React from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingProps = {
  center?: boolean;
  text: string;
};

const Heading = ({ center, text }: HeadingProps) => {
  return (
    <div
      className={twMerge(
        'text-slate-500 px-3 md:px-10 md:text-xl my-3 md:my-10',
        center ? 'text-center' : 'text-start'
      )}
    >
      {text}
    </div>
  );
};

export default Heading;
