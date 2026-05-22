import React from 'react';
import Header from './components/Header';
import { Banner } from './components/Banner';
import { MovieRow } from './components/MovieRow';

export default function Home() {
  return (
    // Test Tailwind formatting <div className="text-white p-4 bg-blue-500 flex rounded"></div> Format On Save Mode: modificationsIfAvailable, does it make sense
    // <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent to-black transition-all lg:h-[140vh]'>
    <div className='relative h-screen overflow-hidden bg-gradient-to-b from-transparent via-black/65 to-black lg:h-[160vh]'>
      <Header></Header>
      <header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle={'Trending Now'} />
        <MovieRow sectionTitle={'Top Rated'} />
        <MovieRow sectionTitle={'Action Movies'} />
      </main>
    </div>
  );
}
