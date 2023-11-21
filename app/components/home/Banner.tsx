import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Banner = ({ className }: { className?: string }) => {
  return (
    <section className="py-10 bg-purpleLight">
      <div
        className={twMerge(
          'bg-[url(/images/banner.png)] bg-left-top bg-no-repeat group ',
          className
        )}
      >
        <div
          className={twMerge(
            'h-[200px] flex justify-center items-center border-4 border-purpleLight group-hover:border-white transition-all duration-1000 ease-in-out'
          )}
        >
          <h1 className="md:text-4xl text-2xl text-purpleDark font-bold group-hover:text-white transition-all duration-1000 ease-in-out">
            We Are Here For You...
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
