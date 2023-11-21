import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const PageTopPaddingContainer = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"div">) => {
  return <div className={twMerge("pt-20 md:pt-28", className)} {...rest} />;
};

export const PageHorizontalPaddingContainer = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        'mx-auto w-full max-w-[1340px] px-5 md:px-10',
        className
      )}
      {...rest}
    />
  );
};
