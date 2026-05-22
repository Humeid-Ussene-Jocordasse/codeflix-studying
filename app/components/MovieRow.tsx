import Image from 'next/image';
import React from 'react';

type MovieTitleProps = {
  sectionTitle: string;
};

const MovieCard = ({ index }: { index: number }) => (
  <div className='group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110 lg:h-52 lg:min-w-[400px]'>
    <Image
      key={index}
      src={`/item_${index}.png`}
      alt='Name'
      className='rounded'
      fill={true}
    />
  </div>
);

export function MovieRow({ sectionTitle }: MovieTitleProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>

      <div className='scrollbar-hide -ml-8 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index) => (
          <MovieCard index={index} />
        ))}
      </div>
    </div>
  );
}
